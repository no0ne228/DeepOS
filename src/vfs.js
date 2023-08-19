const fs = {
    "filePrefix": "deepos-fs:",
    "mkdir" : function(dir, name) {
        crdir = dir;
        var dirToCreate;
        if (dir == '/') {
            dirToCreate = dir + name;
        } else {
            dirToCreate = dir + '/' + name;
        }
        var dirToCreateCheck = StringToArray(dirToCreate);
        if (this.filePrefix + '/'in localStorage) {
            if (!(this.filePrefix + dirToCreate in localStorage)) {
                if (dirToCreate[0] == "/" && !(dirToCreate[0] == ' ')) {
                    if (howMuchItems("/", dirToCreateCheck) > 1) {
                        if (this.filePrefix + dir in localStorage) {
                            addObjToLocalStotage(`${this.filePrefix}${dirToCreate}`, {
                                "type": "dir",
                                "dirtype": "basic",
                                "rights": "RWD"
                            });
                        } else {
                            console.error(`'${dir}': direction not found`)
                        }
                    } else {
                        addObjToLocalStotage(this.filePrefix + dirToCreate, {
                            "type": "dir",
                            "dirtype": "basic",
                            "rights": "RWD"
                        });
                    }
                } else {
                    console.error(`'${name}': direction name is not correct`);
                }
            } else {
                console.error(`'${dirToCreate}': direction already exists`)
            }
        } else {
            addObjToLocalStotage(`${this.filePrefix}`, {
                "type": "dir",
                "dirtype": "root",
                "rights": "R"
            });
        }
    },
    "rm" : function(dir) {
        if (this.filePrefix + dir in localStorage) {
            var rights = StringToArray(JSON.parse(localStorage.getItem(this.filePrefix + dir)).rights);
            if (rights.includes("D")) {
                localStorage.removeItem(this.filePrefix + dir);
            } else {
                console.error(`'${dir}': access denied`)
            }
        } else {
            console.error(`'${dir}': direction not found`)
        }
    },
    "touch" : function(dir, name, content) {
        var fileToCreate;
        if (dir == '/') {
            fileToCreate = `${dir}${name}`
        } else {
            fileToCreate = `${dir}/${name}`
        }
        try {
            var fileType = name.slice(-0, -3);
        } catch(e) {
            console.error('File name not specified');
        }
        var fileContent;
        switch (fileType) {
            case 'str':
                fileContent = content;
                break;
            case 'arr':
                //use "" inside string arrays
                fileContent = content;
                break;
            case 'obj':
                fileContent = JSON.parse(content);
                break;
            case 'int':
                fileContent = Number(content);
                break;
            default:
                fileContent = content;
                break;
        }
        if (this.filePrefix + dir in localStorage) {
            addObjToLocalStotage(this.filePrefix + fileToCreate, {
                "type": "file",
                "filetype": fileType,
                "content": fileContent,
                "rights": "RWD"
            });
        } else {
            console.error(`'${dir}': direction not found`)
        }
    },
    "cat" : function(fileDir) {
        var result;
        var fileType;
        if (this.filePrefix + fileDir in localStorage) {
            var file = JSON.parse(localStorage.getItem(this.filePrefix + fileDir));
            if (file.type == 'file') {
                if (file.rights.includes("R")) {
                    fileType = fileDir.slice(-0, -3);
                    switch (fileType) {
                        case 'str':
                            result = file.content;
                            break;
                        case 'arr':
                            result = JSON.parse(file.content);
                            break;
                        case 'obj':
                            result = JSON.parse(file.content);
                            break;
                        default:
                            result = file.content;
                            break;
                    }
                } else {
                    console.error(`${fileDir}: access denied`)
                }
            } else {
                console.error(`${fileDir} is not a file`);
            }
        } else {
            console.error(`'${fileDir}': file not found`);
        }
        return result;
    },
    "getRights" : function(dirFile) {
        if (this.filePrefix + dirFile in localStorage) {
            var fd = JSON.parse(localStorage.getItem('fs-' + dirFile));
            return fd.rights;
        } else {
            console.error(`${dir}: direction not found`)
        }
    },
    "isExsist" : function(dirFile) {
        if (dirFile[0] == '/') {
            if (`${this.filePrefix}${dirFile}` in localStorage) {
                return true;
            }
        }
    }
};
function addObjToLocalStotage(name, obj) {
    localStorage.setItem(name, JSON.stringify(obj));
}
function readObjFromStorage(name) {
    return JSON.stringify(localStorage.getItem(name));
}
function StringToArray(str) {
    var result = [];
    for (var i in str) {
        result.push(str[i]);
    }
    return result;
}
function howMuchItems(item, obj) {
    let count = 0;
    for (let i in obj) {
        if (obj[i] == item) {
            count = count + 1;
        }
    }
    return count;
}
function isItemInStr(item, obj) {
    var objArray = StringToArray(obj)
    if (item in objArray) {
        return true;
    } else {
        return false;
    }
}
if (!(`${fs.filePrefix}/` in localStorage)) {
    console.log("Root not mounted, attempting to mount")
    console.log("Mounting root...")
    try {
        addObjToLocalStotage(`${fs.filePrefix}/`, {
            "type": "dir",
            "dirtype": "root",
            "rights": "R"
        });
        console.info("Root mounted")
    } catch (e) {
        if (!(`${fs.filePrefix}/` in localStorage)) {
            console.error(`Root not mounted. ${e}`)
        }
    }
  }
