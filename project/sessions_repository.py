import sqlite3
import uuid
import os.path


def getConnection():
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    db_path = os.path.join(BASE_DIR, "geterdone.db")
    con = sqlite3.connect(db_path)
    return con


def saveSession(projectId, duration, comments):
    con = getConnection()
    cur = con.cursor()
    cur.execute(
        "INSERT INTO Sessions (SessionId,ProjectId,CreatedDateTime,Seconds,Comments) VALUES (?,?,DATETIME(),?,?)",
        (str(uuid.uuid1()), projectId, duration, comments),
    )
    con.commit()
    con.close()
