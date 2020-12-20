FROM prophet

WORKDIR winter

RUN pip install flask-sqlalchemy && \
	pip install flask-migrate

COPY . /app/winter

RUN pip list -o

CMD ["python3", "WebApp/app.py"]
