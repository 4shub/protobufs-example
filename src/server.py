import flask
from generated import customerlist_pb2

app = flask.Flask(__name__)

# creating our "database"
customer1 = customerlist_pb2.Customer(name='Shubham', id=0, email='shub@shub.club')
customer2 = customerlist_pb2.Customer(name='Rui', id=1, email='rui@too.com', isNewCustomer=True)

customer_list = customerlist_pb2.CustomerList()
customer_list.customer.append(customer1)
customer_list.customer.append(customer2)


@app.route('/customer-list')
def get_customer_list():
    # `SerializeToString` is a helper function that serializes customer_list to a binary format
    return customer_list.SerializeToString()

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3001)