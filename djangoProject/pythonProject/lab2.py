import MySQLdb

db = MySQLdb.connect(
    host="localhost",
    user="dbuser",
    passwd="123",
    db="first_db"
)

c=db.cursor()
c.execute("INSERT INTO camp_shift (themes, description) VALUES (%s, %s);", ('Camp shift', 'Description'))
db.commit()
c.close()
db.close()