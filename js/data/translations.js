/**
 * Translations and CV download paths. Loaded before main.js (no modules).
 */
// Порядок и отображение в переключателе. Добавление сюда + блок в translations + cvDownloads = новый язык на сайте.
window.langList = [
	{ code: 'en', flag: 'flag-gb', labelKey: 'lang-english' },
	{ code: 'de', flag: 'flag-de', labelKey: 'lang-german' },
	{ code: 'uk', flag: 'flag-ua', labelKey: 'lang-ukrainian' },
	{ code: 'ru', flag: 'flag-ru', labelKey: 'lang-russian' }
];

window.translations = {
			'ru': {
                // Header & Basic Info
                'name': 'Михаил Кийко',
                'position': 'Junior DevOps инженер, Системный администратор, Security Engineer',
                'email': 'kiykomi@gmail.com',
                'phone': '+49 (174) 859-18-66',
                'location': 'Люнен, Германия',
                'download-cv': 'Скачать CV',
                
                // Language Options
                'lang-english': 'English',
                'lang-russian': 'Русский',
                'lang-german': 'Deutsch',
                'lang-ukrainian': 'Українська',
                
                // About
                'about': 'О себе',
                'about-text': 'Опытный системный администратор с более чем 17-летним стажем управления и защиты IT инфраструктуры в корпоративной, промышленной и медицинской средах. Квалифицирован в Windows и Linux администрировании, сетях и обслуживании оборудования, включая МРТ, КТ, рентген и другое медицинское оборудование. Знаком с лучшими практиками кибербезопасности, защитой систем и предотвращением инцидентов. Завершил обучение в DevOps Academy с базовым опытом в CI/CD и автоматизации инфраструктуры.',
                
                // Skills
                'skills': 'Технические навыки',
                'skill-jenkins': 'Jenkins',
                'skill-git': 'Git',
                'skill-python': 'Python',
                'skill-bash': 'Bash',
                'skill-linux': 'Linux',
                'skill-gitlab': 'GitLab CI',
                'skill-ansible': 'Ansible',
                'skill-security': 'Безопасность',
                'skill-aws': 'AWS',
                'skill-docker': 'Docker',
                'skill-windows': 'Windows',
                'skill-kubernetes': 'Kubernetes',
                
                // Languages
                'languages': 'Языки',
                'ukrainian': 'Украинский',
                'russian': 'Русский',
                'english': 'Английский',
                'german': 'Немецкий',
                
                // Soft Skills
                'soft-skills': 'Гибкие навыки',
                'leadership': 'Лидерство команды',
                'communication': 'Коммуникация',
                'problem-solving': 'Решение проблем',
                'project-management': 'Управление проектами',
                'time-management': 'Управление временем',
                
                // Experience
                'experience': 'Профессиональный опыт',
                'employment': 'Работа',
                'education': 'Образование',
                'certifications': 'Сертификации',
                
                // Position titles
                'position-support': 'Системный администратор',
                'position-lead': 'Руководитель команды поддержки',
                'position-sysadmin': 'Системный администратор',
                'position-service': 'Ведущий инженер (банкоматы и POS-терминалы)',
                
                // Company names
                'company-confidential': 'Конфиденциальный клиент',
                'company-bank': 'Банк "Надра"',
                
                // Experience descriptions
                'exp1-desc': '• Поддержка пользователей (1-й/2-й уровень) и управление IT-инфраструктурой<br>• Администрирование Linux-серверов, сетевой инфраструктуры и систем мониторинга<br>• Скрипты и автоматизация на PowerShell, Bash, Python и Go для администрирования<br>• Разработка внутренних инструментов и приложений для оптимизации процессов<br>• Настройка и сопровождение систем мониторинга<br>• Документирование систем и процессов<br>• Устранение неполадок и управление инцидентами в повседневной работе<br>• Работа с медицинским оборудованием и системами PACS/DICOM',
                'exp2-desc': '• Руководство командой поддержки пользователей из 7 специалистов<br>• Организация рабочих процессов, распределение задач и обучение персонала<br>• Решение сложных технических вопросов и координация с поставщиками<br>• Внедрение ITIL процессов и управление SLA<br>• Документирование и отчетность перед руководством',
                'exp3-desc': '• Обслуживание и администрирование серверов и рабочих станций в медицинской среде<br>• Мониторинг оборудования и ПО для критических медицинских систем<br>• Поддержка и обслуживание IT-связанного медицинского оборудования (МРТ, КТ, рентген)<br>• Обеспечение соответствия нормам защиты медицинских данных<br>• Процедуры экстренного реагирования и восстановления систем',
                'exp4-desc': '• Поддержка IT инфраструктуры филиала для 150+ сотрудников<br>• Управление учетными записями пользователей, правами доступа и сетевым оборудованием<br>• Установка ПО, обновления и управление лицензиями<br>• Внедрение политик безопасности и стратегий резервного копирования<br>• Интеграция с корпоративными IT системами и политиками',
                'exp5-desc': '• Локальная техническая поддержка офисного и серверного оборудования<br>• Настройка и обслуживание сетевого оборудования<br>• Настройка пользовательских рабочих станций и устранение неисправностей<br>• Диагностика оборудования и замена<br>• Поддержка на месте и решение проблем',
                'exp6-desc': '• Обслуживание, диагностика и ремонт банкоматов и POS-терминалов<br>• Обеспечение бесперебойной работы банковского оборудования<br>• Управление наличными и процедуры безопасности<br>• Экстренное реагирование на сбои оборудования<br>• Обслуживание клиентов и техническая поддержка',
                
                // Education
                'cert-devops': 'Компетенции DevOps инженерии',
                'devops-desc': 'Комплексная учебная программа, охватывающая современные DevOps практики, CI/CD пайплайны, контейнеризацию и автоматизацию инфраструктуры. Практический опыт с Linux, Bash, Python, AWS, Docker, Ansible, Terraform, и Jenkins.',
                'university': 'Херсонский Национальный Технический Университет',
                'degree-bachelor': 'Бакалавр компьютерной инженерии',
                'bachelor-desc': 'Специализация на компьютерных системах и сетях. Курсы включали системное администрирование, сетевые протоколы, архитектуру оборудования, кибербезопасность и разработку ПО.',
                
                // Certifications descriptions
				'veeam1-desc': 'Базовые знания концепций резервного копирования M365, сценариев потери данных и стратегий защиты Veeam.',
				'veeam2-desc': 'Базовые знания комплексных решений Veeam по защите данных для виртуальных, физических и облачных рабочих нагрузок.',
				'stepik-desc': 'Основы системы Linux: операции командной строки, права доступа к файлам, управление пользователями, контроль процессов, администрирование сервисов и основы shell-скриптинга.',
				'stepik2-desc': 'Комплексное изучение баз данных: SQL, проектирование и нормализация БД, MySQL, ORM, NoSQL, оптимизация запросов и администрирование.',
				'3cx-desc': 'Практический опыт работы с телефонной системой 3CX: установка, управление пользователями, маршрутизация вызовов и базовое устранение неполадок.',
				'B1-Deutsch-desc': 'Сертификат немецкого языка уровня B1.',
				'B2-Deutsch-desc': 'Сертификат немецкого языка уровня B2.',
				'tuev-desc': 'Индивидуальное коучинг-занятие для профессиональной подготовки, включая поддержку немецкого языка, связанного с карьерой. Обучение охватывало стратегии подачи заявлений, развитие ключевых компетенций, улучшение индивидуальных навыков в повседневных и рабочих ситуациях, а также профессиональную языковую подготовку.',
              
                // Projects
				'projects': 'Мои проекты',
                'project1-title': 'Автоматизация конфигурации Jenkins/MikroTik маршрутизаторов',
                'project1-desc': 'Проект автоматизации MikroTik маршрутизаторов стандартизирует и оптимизирует конфигурацию устройств MikroTik в распределенных сетях. Он автоматизирует критические задачи настройки, включая именование интерфейсов, усиление брандмауэра, развертывание VPN серверов (PPTP/L2TP/IPSec), интеграцию мониторинга и безопасные резервные копии конфигураций через Oxidized. Разработанное для масштабируемости и согласованности, решение использует подход на основе параметров для поддержки гибкого развертывания в различных конфигурациях сайтов. Система повышает безопасность путем отключения небезопасных служб, обеспечения контроля доступа и включения защиты от DDoS и атак грубой силы. Она также интегрируется с централизованными системами мониторинга и аутентификации (RADIUS, SNMP, email-уведомления), обеспечивая надежную работу и возможность аудита. Построенная с Jenkins, автоматизация предоставляет повторяемый, отслеживаемый и поддерживаемый процесс для бесконтактного провизионинга граничных маршрутизаторов.',
                'project2-title': 'Финальный проект EPAM (CI/CD конвейер для Spring PetClinic с Jenkins, Terraform и Ansible)',
                'project2-desc': 'Этот проект автоматизирует полный жизненный цикл доставки приложения Spring PetClinic — от кода до продакшна. Он устанавливает бесшовный, полностью автоматизированный CI/CD конвейер с использованием Jenkins, Terraform и Ansible для сборки, тестирования, контейнеризации и развертывания приложения на AWS инфраструктуре. Конвейер провизионит среды разработки и продакшн по требованию, развертывает докеризованные сервисы через Ansible и при желании демонтирует все одним утверждением. Каждый шаг отслеживается и мониторится с уведомлениями Telegram в реальном времени, обеспечивая мгновенную обратную связь. Элегантно, согласованно и повторяемо — это автоматизация инфраструктуры и развертывания на высшем уровне.',
                'project3-title': 'GUI генератор конфигураций Aruba коммутаторов',
                'project3-desc': 'Этот проект автоматизирует создание стандартизированных конфигураций Aruba коммутаторов через интуитивный GUI на базе PowerShell. Разработанный для сетевых администраторов, он устраняет ошибки ручного ввода, направляя пользователей через простой интерфейс для определения моделей коммутаторов, ролей портов (Access/Trunk), назначений VLAN, настроек стекирования и базовых сетевых параметров. С функциями как динамические таблицы портов, автоматическая конфигурация VLAN и копирование в буфер обмена одним кликом, инструмент оптимизирует развертывание как для отдельных, так и для стекированных коммутаторов — делая согласованное, повторяемое провизионирование коммутаторов быстрым и доступным для всех уровней навыков.',
                'project4-title': 'Все мои проекты',
                'project4-desc': 'Вы можете найти все мои другие публичные проекты здесь.',
                
                // Links
                'details': 'Детали',
                'security': 'Безопасность',
                'automation': 'Автоматизация',
                
                // Footer
                'rights': 'Все права защищены.'
            },
            'uk': {
				// Header & Basic Info
				'name': 'Михайло Кийко',
				'position': 'Junior DevOps інженер, Системний адміністратор, Security Engineer',
				'email': 'kiykomi@gmail.com',
				'phone': '+49 (174) 859-18-66',
				'location': 'Люнен, Німеччина',
				'download-cv': 'Завантажити CV',
				
				// Language Options
				'lang-english': 'English',
				'lang-russian': 'Русский',
				'lang-german': 'Deutsch',
				'lang-ukrainian': 'Українська',
				
				// About
				'about': 'Про себе',
				'about-text': 'Досвідчений системний адміністратор з понад 17-річним стажем управління та захисту IT-інфраструктури у корпоративному, промисловому та медичному середовищах. Кваліфікований у Windows та Linux адмініструванні, роботі з мережами та обслуговуванні обладнання, включаючи МРТ, КТ, рентген та інше медичне обладнання. Знайомий з найкращими практиками кібербезпеки, захистом систем та запобіганням інцидентам. Завершив навчання в DevOps Academy з базовим досвідом у CI/CD та автоматизації інфраструктури.',
				
				// Skills
				'skills': 'Технічні навички',
				'skill-jenkins': 'Jenkins',
				'skill-git': 'Git',
				'skill-python': 'Python',
				'skill-bash': 'Bash',
				'skill-linux': 'Linux',
				'skill-gitlab': 'GitLab CI',
				'skill-ansible': 'Ansible',
				'skill-security': 'Безпека',
				'skill-aws': 'AWS',
				'skill-docker': 'Docker',
				'skill-windows': 'Windows',
				'skill-kubernetes': 'Kubernetes',
				
				// Languages
				'languages': 'Мови',
				'ukrainian': 'Українська',
				'russian': 'Російська',
				'english': 'Англійська',
				'german': 'Німецька',
				
				// Soft Skills
				'soft-skills': 'М’які навички',
				'leadership': 'Лідерство команди',
				'communication': 'Комунікація',
				'problem-solving': 'Вирішення проблем',
				'project-management': 'Управління проєктами',
				'time-management': 'Управління часом',
				
				// Experience
				'experience': 'Професійний досвід',
				'employment': 'Робота',
				'education': 'Освіта',
				'certifications': 'Сертифікації',
				
				// Position titles
				'position-support': 'Системний адміністратор',
				'position-lead': 'Керівник команди підтримки',
				'position-sysadmin': 'Системний адміністратор',
				'position-service': 'Провідний інженер (банкомати та POS-термінали)',
				
				// Company names
				'company-confidential': 'Конфіденційний клієнт',
				'company-bank': 'Банк "Надра"',
				
				// Experience descriptions
				'exp1-desc': '• Підтримка користувачів (1-й/2-й рівень) та управління IT-інфраструктурою<br>• Адміністрування Linux-серверів, мережевої інфраструктури та систем моніторингу<br>• Скрипти та автоматизація на PowerShell, Bash, Python та Go для адміністрування<br>• Розробка внутрішніх інструментів та застосунків для оптимізації процесів<br>• Налаштування та супровід систем моніторингу<br>• Документування систем та процесів<br>• Усунення несправностей та управління інцидентами в щоденній роботі<br>• Робота з медичним обладнанням та системами PACS/DICOM',
				'exp2-desc': '• Керівництво командою підтримки користувачів з 7 спеціалістів<br>• Організація робочих процесів, розподіл завдань та навчання персоналу<br>• Вирішення складних технічних питань і координація з постачальниками<br>• Впровадження ITIL процесів та управління SLA<br>• Документування та звітність перед керівництвом',
				'exp3-desc': '• Обслуговування та адміністрування серверів і робочих станцій у медичному середовищі<br>• Моніторинг обладнання та ПЗ для критичних медичних систем<br>• Підтримка й обслуговування медичного обладнання (МРТ, КТ, рентген)<br>• Забезпечення відповідності нормам захисту медичних даних<br>• Процедури екстреного реагування та відновлення систем',
				'exp4-desc': '• Підтримка IT-інфраструктури філії для 150+ співробітників<br>• Управління обліковими записами, правами доступу та мережевим обладнанням<br>• Встановлення ПЗ, оновлень та управління ліцензіями<br>• Впровадження політик безпеки та стратегій резервного копіювання<br>• Інтеграція з корпоративними IT-системами та політиками',
				'exp5-desc': '• Локальна технічна підтримка офісного та серверного обладнання<br>• Налаштування й обслуговування мережевого обладнання<br>• Налаштування робочих станцій та усунення несправностей<br>• Діагностика обладнання та заміна<br>• Підтримка на місці та вирішення проблем',
				'exp6-desc': '• Обслуговування, діагностика та ремонт банкоматів і POS-терміналів<br>• Забезпечення безперебійної роботи банківського обладнання<br>• Управління готівкою та процедури безпеки<br>• Екстрене реагування на збої обладнання<br>• Обслуговування клієнтів і технічна підтримка',
				
				// Education
				'cert-devops': 'Компетенції DevOps інженерії',
				'devops-desc': 'Комплексна навчальна програма, що охоплює сучасні DevOps-практики, CI/CD пайплайни, контейнеризацію та автоматизацію інфраструктури. Практичний досвід з Linux, Bash, Python, AWS, Docker, Ansible, Terraform, та Jenkins.',
				'university': 'Херсонський Національний Технічний Університет',
				'degree-bachelor': 'Бакалавр комп’ютерної інженерії',
				'bachelor-desc': 'Спеціалізація на комп’ютерних системах і мережах. Курси включали системне адміністрування, мережеві протоколи, архітектуру обладнання, кібербезпеку та розробку ПЗ.',
				
				// Certifications descriptions
				'veeam1-desc': 'Базові знання концепцій резервного копіювання M365, сценаріїв втрати даних та стратегій захисту Veeam.',
				'veeam2-desc': 'Базові знання комплексних рішень Veeam щодо захисту даних для віртуальних, фізичних та хмарних робочих навантажень.',
				'stepik-desc': 'Основи системи Linux: операції командного рядка, права доступу до файлів, керування користувачами, контроль процесів, адміністрування сервісів та основи shell-скриптинга.',
				'stepik2-desc': 'Комплексне вивчення баз даних: SQL, проєктування та нормалізація БД, MySQL, ORM, NoSQL, оптимізація запитів та адміністрування.',
				'3cx-desc': 'Практичний досвід роботи з телефонною системою 3CX: встановлення, керування користувачами, маршрутизація дзвінків та базове усунення несправностей.',
				'B1-Deutsch-desc': 'Сертифікат німецької мови рівня B1.',
				'B2-Deutsch-desc': 'Сертифікат німецької мови рівня B2.',
				'tuev-desc': 'Індивідуальний коучинг для професійної підготовки, включаючи підтримку німецької мови для кар’єри. Тренінг охоплював стратегії подання заяв, розвиток ключових компетенцій, покращення індивідуальних навичок у повсякденних та робочих ситуаціях, а також професійну мовну підготовку.',

				
				// Projects
				'projects': 'Мої проекти',
                'project1-title': 'Автоматизація конфігурації Jenkins/MikroTik маршрутизаторів',
                'project1-desc': 'Проект автоматизації MikroTik маршрутизаторів стандартизує та оптимізує конфігурацію пристроїв MikroTik у розподілених мережах. Він автоматизує критичні завдання налаштування, включаючи іменування інтерфейсів, зміцнення брандмауера, розгортання VPN серверів (PPTP/L2TP/IPSec), інтеграцію моніторингу та безпечні резервні копії конфігурацій через Oxidized. Розроблене для масштабованості та узгодженості, рішення використовує підхід на основі параметрів для підтримки гнучкого розгортання в різних конфігураціях сайтів. Система підвищує безпеку шляхом відключення небезпечних служб, забезпечення контролю доступу та увімкнення захисту від DDoS та атак грубої сили. Вона також інтегрується з централізованими системами моніторингу та аутентифікації (RADIUS, SNMP, email-сповіщення), забезпечуючи надійну роботу та можливість аудиту. Побудована з Jenkins, автоматизація надає повторюваний, відстежуваний та підтримуваний процес для безконтактного провізіонингу граничних маршрутизаторів.',
                'project2-title': 'Фінальний проект EPAM (CI/CD конвеєр для Spring PetClinic з Jenkins, Terraform та Ansible)',
                'project2-desc': 'Цей проект автоматизує повний життєвий цикл доставки додатку Spring PetClinic — від коду до продакшну. Він встановлює безшовний, повністю автоматизований CI/CD конвеєр з використанням Jenkins, Terraform та Ansible для збирання, тестування, контейнеризації та розгортання додатку на AWS інфраструктурі. Конвеєр провізіонує середовища розробки та продакшну на вимогу, розгортає докеризовані сервіси через Ansible і за бажанням демонтує все одним схваленням. Кожен крок відстежується та моніториться з сповіщеннями Telegram у реальному часі, що надає миттєвий зворотний зв\'язок. Елегантно, узгоджено та повторювано — це автоматизація інфраструктури та розгортання на найвищому рівні.',
                'project3-title': 'GUI генератор конфігурацій Aruba комутаторів',
                'project3-desc': 'Цей проект автоматизує створення стандартизованих конфігурацій Aruba комутаторів через інтуїтивний GUI на базі PowerShell. Розроблений для мережевих адміністраторів, він усуває помилки ручного введення, направляючи користувачів через простий інтерфейс для визначення моделей комутаторів, ролей портів (Access/Trunk), призначень VLAN, налаштувань стекування та базових мережевих параметрів. З функціями як динамічні таблиці портів, автоматична конфігурація VLAN та копіювання в буфер обміну одним кліком, інструмент оптимізує розгортання як для окремих, так і для стекованих комутаторів — роблячи узгоджене, повторюване провізіонування комутаторів швидким та доступним для всіх рівнів навичок.',
                'project4-title': 'Всі мої проекти',
                'project4-desc': 'Ви можете знайти всі мої інші публічні проекти тут.',
				
				// Links
				'details': 'Деталі',
				'security': 'Безпека',
				'automation': 'Автоматизація',
				
				// Footer
				'rights': 'Усі права захищено.'
			},

            'de': {
                // Header & Basic Info
                'name': 'Mykhailo Kyiko',
                'position': 'Junior DevOps Ingenieur, Systemadministrator, Security Engineer',
                'email': 'kiykomi@gmail.com',
                'phone': '+49 (174) 859-18-66',
                'location': 'Lünen, Deutschland',
                'download-cv': 'Lebenslauf herunterladen',
                
                // Language Options
                'lang-english': 'English',
                'lang-russian': 'Русский',
                'lang-german': 'Deutsch',
                'lang-ukrainian': 'Українська',
                
                // About
                'about': 'Über mich',
                'about-text': 'Erfahrener Systemadministrator mit über 17 Jahren Erfahrung in der Verwaltung und Sicherung von IT-Infrastrukturen in Unternehmens-, Industrie- und Medizinumgebungen. Qualifiziert in Windows- und Linux-Administration, Netzwerken und Wartung von Hardware, einschließlich MRT, CT, Röntgen und anderer medizinischer Geräte. Kenntnisreich in Cybersecurity-Best-Practices, Systemhärtung und Incident-Prävention. Abgeschlossene DevOps Academy-Ausbildung mit grundlegender Erfahrung in CI/CD und Infrastruktur-Automatisierung.',
                
                // Skills
                'skills': 'Technische Fähigkeiten',
                'skill-jenkins': 'Jenkins',
                'skill-git': 'Git',
                'skill-python': 'Python',
                'skill-bash': 'Bash',
                'skill-linux': 'Linux',
                'skill-gitlab': 'GitLab CI',
                'skill-ansible': 'Ansible',
                'skill-security': 'Sicherheit',
                'skill-aws': 'AWS',
                'skill-docker': 'Docker',
                'skill-windows': 'Windows',
                'skill-kubernetes': 'Kubernetes',
                
                // Languages
                'languages': 'Sprachen',
                'ukrainian': 'Ukrainisch',
                'russian': 'Russisch',
                'english': 'Englisch',
                'german': 'Deutsch',
                
                // Soft Skills
                'soft-skills': 'Soft Skills',
                'leadership': 'Teamführung',
                'communication': 'Kommunikation',
                'problem-solving': 'Problemlösung',
                'project-management': 'Projektmanagement',
                'time-management': 'Zeitmanagement',
                
                // Experience
                'experience': 'Berufserfahrung',
                'employment': 'Anstellung',
                'education': 'Bildung',
                'certifications': 'Zertifizierungen',
                
                // Position titles
                'position-support': 'Systemadministrator',
                'position-lead': 'Support Team Lead',
                'position-sysadmin': 'Systemadministrator',
                'position-service': 'Service Engineer (Geldautomaten und POS-Terminals)',
                
                // Company names
                'company-confidential': 'Vertraulicher Kunde',
                'company-bank': 'Bank "Nadra"',
                
                // Experience descriptions
                'exp1-desc': '• Benutzer-Support (1./2. Level) und IT-Infrastrukturmanagement<br>• Administration von Linux-Servern, Netzwerkinfrastruktur und Monitoring-Systemen<br>• Skripting und Automatisierung mit PowerShell, Bash, Python und Go für administrative Aufgaben<br>• Entwicklung interner Tools und Anwendungen zur Workflow-Optimierung<br>• Konfiguration und Wartung von Monitoring-Lösungen<br>• Dokumentation von Systemen und Prozessen<br>• Fehlerbehebung und Incident-Management im Tagesgeschäft<br>• Arbeit mit Medizingeräten sowie PACS- und DICOM-Systemen',
                'exp2-desc': '• Führung eines Benutzersupport-Teams von 7 Spezialisten<br>• Organisation von Arbeitsprozessen, Aufgabenverteilung und Personalschulung<br>• Lösung komplexer technischer Probleme und Koordination mit Anbietern<br>• Implementierung von ITIL-Prozessen und SLA-Management<br>• Dokumentation und Berichterstattung an das Management',
                'exp3-desc': '• Wartung und Administration von Servern und Workstations in medizinischer Umgebung<br>• Hardware- und Software-Monitoring für kritische medizinische Systeme<br>• Support und Wartung von IT-bezogenen medizinischen Geräten (MRT, CT, Röntgen)<br>• Sicherstellung der Einhaltung medizinischer Datenschutzbestimmungen<br>• Notfallreaktion und Systemwiederherstellungsverfahren',
                'exp4-desc': '• Support der Filial-IT-Infrastruktur für 150+ Mitarbeiter<br>• Verwaltung von Benutzerkonten, Zugriffsrechten und Netzwerkausrüstung<br>• Software-Installation, Updates und Lizenzverwaltung<br>• Implementierung von Sicherheitsrichtlinien und Backup-Strategien<br>• Integration mit Unternehmens-IT-Systemen und -Richtlinien',
                'exp5-desc': '• Lokaler technischer Support für Büro- und Serverausrüstung<br>• Netzwerkausrüstung Konfiguration und Wartung<br>• Benutzer-Workstation-Einrichtung und Fehlerbehebung<br>• Hardware-Diagnose und Austausch<br>• Vor-Ort-Support und Problemlösung',
                'exp6-desc': '• Wartung, Diagnose und Reparatur von Geldautomaten und POS-Terminals<br>• Sicherstellung des unterbrechungsfreien Betriebs von Bankausrüstung<br>• Bargeldverwaltung und Sicherheitsverfahren<br>• Notfallreaktion bei Geräteausfällen<br>• Kundendienst und technischer Support',
                
                // Education
                'cert-devops': 'DevOps Engineering Zertifikat',
                'devops-desc': 'Umfassendes Trainingsprogramm zu modernen DevOps-Praktiken, CI/CD-Pipelines, Containerisierung und Infrastruktur-Automatisierung. Praktische Erfahrung mit Linux, Bash, Python, AWS, Docker, Ansible, Terraform, und Jenkins.',
                'university': 'Nationale Technische Universität Cherson',
                'degree-bachelor': 'Bachelor in Computertechnik',
                'bachelor-desc': 'Spezialisierung auf Computersysteme und Netzwerke. Kurse umfassten Systemadministration, Netzwerkprotokolle, Hardware-Architektur und Softwareentwicklung.',
                
                // Certifications descriptions
				'veeam1-desc': 'Grundlegende Kenntnisse der M365-Backup-Konzepte, Datenverlustszenarien und Veeam-Schutzstrategien.',
				'veeam2-desc': 'Grundlegende Kenntnisse der umfassenden Datenschutzlösungen von Veeam für virtuelle, physische und Cloud-Workloads.',
				'stepik-desc': 'Linux-Systemgrundlagen: Kommandozeilen-Operationen, Dateiberechtigungen, Benutzerverwaltung, Prozesskontrolle, Service-Administration und Shell-Scripting-Grundlagen.',
				'stepik2-desc': 'Umfassender Datenbankkurs: SQL-Grundlagen, Datenbankdesign und Normalisierung, MySQL, ORM, NoSQL, Query-Optimierung und Administration.',
				'3cx-desc': 'Praktische Erfahrung mit 3CX-Telefonsystem: Installation, Benutzerverwaltung, Anrufweiterleitung und grundlegende Fehlerbehebung.',
				'B1-Deutsch-desc': 'B1-Deutsch Zertifikat.',
				'B2-Deutsch-desc': 'B2-Deutsch Zertifikat.',
				'tuev-desc': 'Individuelles Coaching zur beruflichen Vorbereitung, einschließlich karrierebezogener Deutschsprachunterstützung. Das Training umfasste Bewerbungsstrategien, die Entwicklung wichtiger Kompetenzen, die Verbesserung individueller Fähigkeiten in Alltags- und Arbeitssituationen sowie berufsbezogene Sprachfertigkeiten.',

                
                // Projects
				'projects': 'Meine Projekte',
                'project1-title': 'Jenkins/MikroTik Router-Konfigurationsautomatisierung',
                'project1-desc': 'Das MikroTik Router-Automatisierungsprojekt standardisiert und optimiert die Konfiguration von MikroTik-Geräten in verteilten Netzwerken. Es automatisiert kritische Setup-Aufgaben einschließlich Interface-Benennung, Firewall-Härtung, VPN-Server-Bereitstellung (PPTP/L2TP/IPSec), Monitoring-Integration und sichere Konfigurations-Backups über Oxidized. Das für Skalierbarkeit und Konsistenz entwickelte System verwendet einen parametergesteuerten Ansatz zur Unterstützung flexibler Bereitstellung in verschiedenen Standortkonfigurationen. Das System erhöht die Sicherheit durch Deaktivierung unsicherer Dienste, Durchsetzung von Zugangskontrollen und Aktivierung von DDoS- und Brute-Force-Schutz. Es integriert sich auch mit zentralisierten Monitoring- und Authentifizierungssystemen (RADIUS, SNMP, E-Mail-Benachrichtigungen) und gewährleistet zuverlässigen Betrieb und Auditierbarkeit. Mit Jenkins erstellt, bietet die Automatisierung einen wiederholbaren, nachverfolgbaren und wartbaren Prozess für die Zero-Touch-Bereitstellung von Edge-Routern.',
                'project2-title': 'EPAM Abschlussprojekt (CI/CD Pipeline für Spring PetClinic mit Jenkins, Terraform und Ansible)',
                'project2-desc': 'Dieses Projekt automatisiert den kompletten Delivery-Lebenszyklus der Spring PetClinic-Anwendung — von Code bis zur Produktion. Es etabliert eine nahtlose, vollautomatisierte CI/CD-Pipeline mit Jenkins, Terraform und Ansible zum Erstellen, Testen, Containerisieren und Bereitstellen der Anwendung auf AWS-Infrastruktur. Die Pipeline stellt Entwicklungs- und Produktionsumgebungen auf Abruf bereit, deployt dockerisierte Services über Ansible und kann optional alles mit einer einzigen Genehmigung wieder abbauen. Jeder Schritt ist nachverfolgbar und überwacht, mit Echtzeit-Telegram-Benachrichtigungen für sofortiges Feedback. Elegant, konsistent und wiederholbar — das ist Infrastruktur- und Deployment-Automatisierung auf höchstem Niveau.',
                'project3-title': 'Aruba Switch-Konfigurationsgenerator GUI',
                'project3-desc': 'Dieses Projekt automatisiert die Erstellung standardisierter Aruba Switch-Konfigurationen durch eine intuitive PowerShell-basierte GUI. Für Netzwerkadministratoren entwickelt, eliminiert es manuelle Fehler, indem es Benutzer durch eine einfache Oberfläche zur Definition von Switch-Modellen, Port-Rollen (Access/Trunk), VLAN-Zuweisungen, Stacking-Setups und grundlegenden Netzwerkeinstellungen führt. Mit Funktionen wie dynamischen Port-Tabellen, automatischer VLAN-Konfiguration und Ein-Klick-Kopieren in die Zwischenablage optimiert das Tool die Bereitstellung sowohl für eigenständige als auch gestapelte Switches — wodurch konsistente, wiederholbare Switch-Bereitstellung schnell und für alle Skill-Level zugänglich wird.',
                'project4-title': 'Alle meine Projekte',
                'project4-desc': 'Sie können alle meine anderen öffentlichen Projekte hier finden.',
                
                // Links
                'details': 'Details',
                'security': 'Sicherheit',
                'automation': 'Automatisierung',
                
                // Footer
                'rights': 'Alle Rechte vorbehalten.'
            },
            'en': {
                // Header & Basic Info
                'name': 'Mykhailo Kyiko',
                'position': 'Junior DevOps Engineer, Sysadmin, Security Engineer',
                'email': 'kiykomi@gmail.com',
                'phone': '+49 (174) 859-18-66',
                'location': 'Lünen, Germany',
                'download-cv': 'Download CV',
                
                // Language Options
                'lang-english': 'English',
                'lang-russian': 'Русский',
                'lang-german': 'Deutsch',
                'lang-ukrainian': 'Українська',
                
                // About
                'about': 'About Me',
                'about-text': 'Experienced System Administrator with over 17 years in managing and securing IT infrastructure across corporate, industrial, and medical environments. Skilled in Windows and Linux administration, networking, and hardware maintenance, including MRI, CT, X-ray, and other medical equipment. Knowledgeable in cybersecurity best practices, system hardening, and incident prevention. Completed DevOps Academy training, with foundational experience in CI/CD and infrastructure automation.',
                
                // Skills
                'skills': 'Technical Skills',
                'skill-jenkins': 'Jenkins',
                'skill-git': 'Git',
                'skill-python': 'Python',
                'skill-bash': 'Bash',
                'skill-linux': 'Linux',
                'skill-gitlab': 'GitLab CI',
                'skill-ansible': 'Ansible',
                'skill-security': 'Security',
                'skill-aws': 'AWS',
                'skill-docker': 'Docker',
                'skill-windows': 'Windows',
                'skill-kubernetes': 'Kubernetes',
                
                // Languages
                'languages': 'Languages',
                'ukrainian': 'Ukrainian',
                'russian': 'Russian',
                'english': 'English',
                'german': 'German',
                
                // Soft Skills
                'soft-skills': 'Soft Skills',
                'leadership': 'Team Leadership',
                'communication': 'Communication',
                'problem-solving': 'Problem Solving',
                'project-management': 'Project Management',
                'time-management': 'Time Management',
                
                // Experience
                'experience': 'Professional Experience',
                'employment': 'Employment',
                'education': 'Education',
                'certifications': 'Certifications',
                
                // Position titles
                'position-support': 'System Administrator',
                'position-lead': 'Support Team Lead',
                'position-sysadmin': 'System Administrator',
                'position-service': 'Service Engineer (ATMs and POS terminals)',
                
                // Company names
                'company-confidential': 'Confidential Client',
                'company-bank': 'Bank "Nadra"',
                
                // Experience descriptions
                'exp1-desc': '• User support (1st/2nd level) and IT infrastructure management<br>• Administration of Linux servers, network infrastructure, and monitoring systems<br>• Scripting and automation using PowerShell, Bash, Python, and Go for administrative tasks<br>• Development of internal tools and applications to optimize workflows<br>• Configuration and maintenance of monitoring solutions<br>• Documentation of systems and processes<br>• Troubleshooting and incident management in daily operations<br>• Work with medical equipment and PACS/DICOM systems',
                'exp2-desc': '• Leading a user support team of 7 specialists<br>• Organizing work processes, task distribution, and staff training<br>• Solving complex technical issues and coordinating with vendors<br>• Implementation of ITIL processes and SLA management<br>• Documentation and reporting to management',
                'exp3-desc': '• Maintenance and administration of servers and workstations in medical environment<br>• Hardware and software monitoring for critical medical systems<br>• Support and maintenance of IT-related medical equipment (MRI, CT, X-ray)<br>• Ensuring compliance with medical data protection regulations<br>• Emergency response and system recovery procedures',
                'exp4-desc': '• Support of branch IT infrastructure for 150+ employees<br>• Management of user accounts, access rights, and network equipment<br>• Software installation, updates, and license management<br>• Implementation of security policies and backup strategies<br>• Integration with corporate IT systems and policies',
                'exp5-desc': '• Local technical support for office and server equipment<br>• Network equipment configuration and maintenance<br>• User workstation setup and troubleshooting<br>• Hardware diagnostics and replacement<br>• On-site support and problem resolution',
                'exp6-desc': '• Maintenance, diagnostics, and repair of ATMs and POS terminals<br>• Ensuring uninterrupted operation of banking equipment<br>• Cash management and security procedures<br>• Emergency response to equipment failures<br>• Customer service and technical support',
                
                // Education
                'cert-devops': 'DevOps Engineering Certificate',
                'devops-desc': 'Comprehensive training program covering modern DevOps practices, CI/CD pipelines, containerization, and infrastructure automation. Hands-on experience with Linux, Bash, Python, AWS, Docker, Ansible, Terraform, and Jenkins.',
                'university': 'Kherson National Technical University',
                'degree-bachelor': "Bachelor's in Computer Engineering",
                'bachelor-desc': 'Specialized in computer systems and networks. Coursework included system administration, network protocols, hardware architecture, Cyber Security and software development.',
                
                // Certifications descriptions
				'veeam1-desc': 'Foundational knowledge of M365 backup concepts, data loss scenarios, and Veeam protection strategies.',
				'veeam2-desc': 'Foundational knowledge of Veeam comprehensive data protection solutions for virtual, physical, and cloud workloads.',
				'stepik-desc': 'Linux system fundamentals covering command-line operations, file permissions, user management, process control, service administration, and shell scripting basics.',
				'stepik2-desc': 'Comprehensive database course: SQL fundamentals, database design and normalization, MySQL, ORM, NoSQL, query optimization and administration.',
				'3cx-desc': 'Hands-on experience with 3CX phone system: installation, user management, call routing, and basic troubleshooting.',
				'B1-Deutsch-desc': 'B1-Deutsch Zertifikat.',
				'B2-Deutsch-desc': 'B2-Deutsch Zertifikat.',
				'tuev-desc': 'Individual coaching for professional readiness, including career-related German language support. The training covered application strategies, development of key competences, enhancement of individual skills in everyday and work situations, and job-specific language proficiency.',
                
                // Projects
                'projects': 'My Projects',
                'project1-title': 'Jenkins/MikroTik Router Configuration Automation',
                'project1-desc': 'The MikroTik Router Automation Project standardizes and streamlines the configuration of MikroTik devices across distributed networks. It automates critical setup tasks including interface naming, firewall hardening, VPN server deployment (PPTP/L2TP/IPSec), monitoring integration, and secure configuration backups via Oxidized. Designed for scalability and consistency, the solution uses a parameter-driven approach to support flexible deployment across various site configurations. The system enhances security by disabling insecure services, enforcing access controls, and enabling DDoS and brute-force protection. It also integrates with centralized monitoring and authentication systems (RADIUS, SNMP, email alerts), ensuring reliable operations and auditability. Built with Jenkins, the automation provides a repeatable, traceable, and maintainable process for zero-touch provisioning of edge routers.',
                'project2-title': 'EPAM Final Project (CI/CD Pipeline for Spring PetClinic with Jenkins, Terraform, and Ansible)',
                'project2-desc': 'This project automates the complete delivery lifecycle of the Spring PetClinic application — from code to production. It establishes a seamless, fully automated CI/CD pipeline using Jenkins, Terraform, and Ansible to build, test, containerize, and deploy the application on AWS infrastructure. The pipeline provisions development and production environments on-demand, deploys Dockerized services via Ansible, and optionally tears everything down with a single approval. Every step is traceable and monitored, with real-time Telegram notifications providing instant feedback. Elegant, consistent, and repeatable — it’s infrastructure and deployment automation at its finest.',
                'project3-title': 'Aruba Switch Configuration Generator GUI',
                'project3-desc': 'This project automates the creation of standardized Aruba switch configurations through an intuitive PowerShell-based GUI. Designed for network administrators, it eliminates manual errors by guiding users through a simple interface to define switch models, port roles (Access/Trunk), VLAN assignments, stacking setups, and basic network settings. With features like dynamic port tables, automatic VLAN configuration, and one-click copy-to-clipboard, the tool streamlines deployment for both standalone and stacked switches — making consistent, repeatable switch provisioning fast and accessible to all skill levels.',
                'project4-title': 'All my projects',
                'project4-desc': 'You can find all my other public projects here.',

                // Links
                'details': 'Details',
                'security': 'Security',
                'automation': 'Automation',
                
                // Footer
                'rights': 'All rights reserved.'
            }
        };

window.cvDownloads = {
	'en': 'CV_KyikoM_EN.pdf',
	'ru': 'CV_KyikoM_RU.pdf',
	'de': 'CV_KyikoM_DE.pdf',
	'uk': 'CV_KyikoM_UK.pdf'
};
