import MySQLdb

db = MySQLdb.connect(
    host="localhost",
    user="newuser",
    passwd="123",
    db="camp_shift_db"
)

c=db.cursor()
c.execute("INSERT INTO camp_shift (themes, description) VALUES (%s, %s);", ('Book', 'Description'))
db.commit()
c.close()
db.close()