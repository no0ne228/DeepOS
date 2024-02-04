#!/bin/bash
# install.sh for KolibriKing/DeepOS
# This script will download and install the latest release of DeepOS from GitHub

# Check if curl is installed
if ! command -v curl &> /dev/null
then
    echo "curl is required to download DeepOS. Please install it first."
        exit 1
        fi

        # Get the latest release tag from GitHub API
        RELEASE_TAG=$(curl -s https://api.github.com/repos/KolibriKing/DeepOS/releases/latest | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

        # Check if the release tag is valid
        if [ -z "$RELEASE_TAG" ]
        then
            echo "Could not find the latest release of DeepOS. Please check the GitHub repository."
                exit 2
                fi

                # Download the release zip file
                echo "Downloading DeepOS $RELEASE_TAG..."
                curl -L -O https://github.com/KolibriKing/DeepOS/archive/$RELEASE_TAG.zip

                # Check if the download was successful
                if [ $? -ne 0 ]
                then
                    echo "Download failed. Please try again later."
                        exit 3
                        fi

                        # Unzip the release file
                        echo "Unzipping DeepOS $RELEASE_TAG..."
                        unzip $RELEASE_TAG.zip

                        # Check if the unzip was successful
                        if [ $? -ne 0 ]
                        then
                            echo "Unzip failed. Please check the zip file."
                                exit 4
                                fi

                                # Move the DeepOS folder to the current directory
                                echo "Moving DeepOS $RELEASE_TAG to the current directory..."
                                mv DeepOS-$RELEASE_TAG DeepOS

                                # Remove the zip file
                                echo "Removing DeepOS $RELEASE_TAG.zip..."
                                rm $RELEASE_TAG.zip

                                # Done
                                echo "DeepOS $RELEASE_TAG is installed. You can start it by running 'python3 -m http.server 3000' or 'light-server -s . -p 3000' in the DeepOS directory and then navigate to http://0.0.0.0:3000 in a web browser."
                                
