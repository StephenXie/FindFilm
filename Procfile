web: gunicorn ./filmmanager/filmmanager.wsgi:application --log-file - --log-level debug
python ./filmmanager/manage.py collectstatic --noinput
./filmmanager/manage.py migrate