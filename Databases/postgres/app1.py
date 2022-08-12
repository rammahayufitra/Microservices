# connect to PostgreSQL from Python 
import psycopg2

hostname = 'localhost'
database = 'demo'
username = 'postgres'
pwd = 'b1l4n0'
port_id = 5432

cur = None
conn = None 

try: 
    conn = psycopg2.connect(
        host = hostname, 
        dbname = database,
        user = username,
        password = pwd,
        port = port_id
    )

    cur = conn.cursor()

    cur.execute('DROP TABLE IF EXISTS employee')

    create_script = ''' CREATE TABLE  IF NOT EXISTS employee (
        id int PRIMARY KEY,
        name varchar(40) NOT NULL, 
        salary int, 
        dept_id varchar(30))'''

    cur.execute(create_script)

    insert_script = 'INSERT INTO employee (id, name, salary, dept_id) VALUES (%s, %s, %s, %s)'
    insert_value = [(1, 'James', 12000, 'D1'), (2, 'Ramma', 13000, 'D1'), (3, 'Hayu', 14000, 'D1'), (4, 'Fitra', 15000, 'D1')]

    for record in insert_value:
        cur.execute(insert_script, record)


    conn.commit()

except Exception as error:
    print(error)
finally:
    if cur is not None:
        cur.close() 
    if conn is not None: 
        conn.close() 