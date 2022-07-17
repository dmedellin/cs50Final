CREATE TABLE Sessions (
SessionId NVARCHAR(50) NOT NULL PRIMARY KEY,
ProjectId NVARCHAR(500) NOT NULL,
CreatedDateTime DATETIME NOT NULL,
Seconds INT NOT NULL,
Comments NVARCHAR(500)
);

CREATE INDEX idx_sessions_projectid ON Sessions(ProjectId);