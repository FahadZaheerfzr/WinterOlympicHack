from flask import Flask, render_template, request
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from fbprophet.serialize import model_to_json, model_from_json

app = Flask(__name__)



@app.route('/')
def home_page():
    return render_template("index.html")


@app.route('/call_model', methods=['POST'])
def post_req():
    try:
        if request.method == "POST":
            country = request.form['country']
            medal = request.form['categories']
            print(country)
            with open('Data/' + country + '_' + medal + '.json', 'r') as fin:
                print(fin)
                m = model_from_json(json.load(fin))  # Load model

                future = m.make_future_dataframe(periods=365 * 4)
                forecast = m.predict(future)
                prediction = int(round(forecast['yhat'].sum() / len(forecast['yhat'])))
                return render_template('index.html',value = prediction)

    except Exception:
        pass


if __name__ == '__main__':
    app.run(host='0.0.0.0')
