import os
import subprocess
import time
from datetime import datetime

CURRENT_DIRECTORY = os.getcwd()
ANGULAR_PROJECT_PATH = "angularClient"
DIST_PATH = "angularClient/dist/angularClient"
FLASK_STATIC_PATH = os.path.join(CURRENT_DIRECTORY, "static")
FLASK_TEMPLATES_PATH = os.path.join(CURRENT_DIRECTORY, "templates")

# subprocess.call(
#     ("cd " + ANGULAR_PROJECT_PATH + " && ng build --watch &"),
#     shell=True,
# )
#print("angular build started")
while True:
    try:
        files = os.listdir(DIST_PATH)
        static_files = ""
        html_files = ""
        for file in files:
            if ".js" in file or ".js.map" in file or ".ico" in file or ".css" in file:
                static_files += file + " "
            if ".html" in file:
                html_files += file + " "
        if len(static_files) > 0:
            print(static_files, datetime.now())
            subprocess.call(
                ("cd " + DIST_PATH + " &&" + " mv " + static_files + FLASK_STATIC_PATH),
                shell=True,
            )
        if len(html_files) > 0:
            print(html_files, datetime.now())
            subprocess.call(
                (
                    "cd "
                    + DIST_PATH
                    + " &&"
                    + " mv "
                    + html_files
                    + FLASK_TEMPLATES_PATH
                ),
                shell=True,
            )
    except Exception as e:
        break
        print(e)
    time.sleep(10.0)
