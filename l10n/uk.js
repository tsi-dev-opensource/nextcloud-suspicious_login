OC.L10N.register(
    "suspicious_login",
    {
    "New login location detected" : "Виявлено нове розташування входу користувача",
    "You can get more info by pressing the button which will open %s and show info about the suspicious IP-address." : "Ви можете отримати більше інформації - для цього клацніть на кнопку, яка відкриє %s та покаже інформацію щодо підозрілих IP-адрес.",
    "A new login into your account was detected. The IP address %s was classified as suspicious. If this was you, you can ignore this message. Otherwise you should change your password." : "Виявлено новий вхід до вашого облікового запису. IP-адресу %s визначено підозрілою. Якщо це були не ви, проігноруйте це повідомлення. В іншому випадку вам потрібно змінити ваш пароль.",
    "More information ↗" : "Докладно ↗",
    "Suspicious Login" : "Підозрілий вхід",
    "New login detected" : "Виявлено новий вхід",
    "Detect and warn about suspicious IPs logging into Nextcloud\n\t" : "Виявляє та попереджає про підозрілі IP адреси, з яких здійснюється вхід до Nextcloud\n\t",
    "Suspicious login detection" : "Виявлення підозрілих входів",
    "The suspicious login app is enabled on this instance. It will keep track of IP addresses users successfully log in from and build a classifier that warns if a new login comes from a suspicious IP address." : "На цьому примірнику увімкнено застосунок з виявлення підозрілих входів. Він перевірятиме успішні входи користувачів з IP-адреси та створить класифікатор, який попереджатиме про новий вхід, який може бути зроблено з підозрілої IP-адреси.",
    "Training data statistics" : "Статистика тренування даних",
    "So far the app has captured {total} logins (including client connections), of which {distinct} are distinct (IP, UID) tuples." : "Наразі застосунок опрацював {total} входів (включно з клієнтськими з'єднаннями, з яких чітко ідентифіковано {distinct} входів (містять IP, UID).",
    "IPv4" : "IPv4",
    "IPv6" : "IPv6",
    "Classifier model statistics" : "Статистика моделі класифікатора",
    "No classifier model has been trained yet. This most likely means that you just enabled the app recently. Because the training of a model requires good data, the app waits until logins of at least {days} days have been captured." : "Поки що модель класифікатора не натреновано. Скоріш за все, це означає, що ви щойно увімкнули застосунок. Оскільки модель тренування вимагає якісних даних, застосунок збиратиме дані протягом щонайменше {days} днів.",
    "During evaluation, the latest model (trained {time}) has shown to capture {recall}% of all suspicious logins (recall), whereas {precision}% of the logins classified as suspicious are indeed suspicious (precision). Below you see a visualization of historic model performance." : "Під час випробування остання модель (тренування впродовж {time}) показала, що було охоплено {recall}% підозрілих входів, з яких визначено підозрілими з точністю {precision}%. Нижче наведено візуалізацію журналу визначень згідгно з моделлю.",
    "Precision" : "Точність",
    "Recall" : "Нагадування"
},
"nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);");
