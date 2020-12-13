
SET @charName = 'Godmode';
SET @message = 'Hello Chaos!';

INSERT INTO audit_chat(type, speaker, message, datetime) VALUES("YELL", @charName, @message, CURRENT_TIMESTAMP())
