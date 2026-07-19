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
                'position': 'Senior IT System Administrator | Infrastructure | Linux | VMware | Automation',
                'email': 'kiykomi@gmail.com',
                'phone': '+49 (174) 496-96-29',
                'location': 'Люнен, Германия',
                'download-cv': 'Скачать CV',
                
                // Language Options
                'lang-english': 'English',
                'lang-russian': 'Русский',
                'lang-german': 'Deutsch',
                'lang-ukrainian': 'Українська',
                
                // About
                'about': 'О себе',
                'about-text': 'IT-системный администратор с 17-летним опытом в инфраструктуре, системном администрировании и IT Operations в исследовательской, медицинской и корпоративной средах. Опыт эксплуатации высокодоступных Linux- и Windows-инфраструктур, виртуализации, мониторинга и автоматизации административных процессов. Опыт руководства, развитые навыки решения проблем и сильная ориентация на стабильность, безопасность и непрерывную оптимизацию IT-систем.',
                
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
                'position-support': 'IT-системный администратор / IT-специалист',
                'position-lead': 'Руководитель команды поддержки',
                'position-sysadmin': 'IT-системный администратор / IT-менеджер',
                'position-it-support': 'Инженер IT-поддержки',
                'position-it-manager': 'IT-менеджер',
                'position-bank-lead': 'Ведущий специалист отдела информационной поддержки',
                'position-olmax': 'Системный администратор',
                'position-service': 'Ведущий инженер (банкоматы и POS-терминалы)',
                
                // Company names
                'company-confidential': 'NDA',
                'company-bank': 'Банк «Надра»',
                'company-airport': 'Международный аэропорт «Херсон»',
                'company-olmax': 'Olmax Systems',
                
                // Experience descriptions
                'exp1-desc': '• IT Operations | Клиентоориентированность: стабильная поддержка L1/L2 для более 150 сотрудников и исследователей, надёжная работа IT-сервисов в рамках заданных SLA<br>• Системное администрирование | Управление инфраструктурой: администрирование более 15 Linux-серверов, кампусной сети и мониторинга (Zabbix/Grafana) с доступностью систем свыше 99,5 %<br>• Автоматизация | Оптимизация процессов: разработка и внедрение более 15 решений на PowerShell, Bash, Python и Go, сокращение ручной работы примерно на 8 часов в неделю<br>• Разработка ПО | Собственная инициатива: три внутренних инструмента для инвентаризации, обработки тикетов и автоматизации процессов<br>• Мониторинг | Проактивное управление инцидентами: более 50 автоматизированных правил для раннего выявления критических состояний<br>• Документирование | Управление знаниями: более 25 runbook и SOP для стандартизации процессов и снижения повторяющихся обращений<br>• Решение проблем | Управление инцидентами: самостоятельный анализ более 10 инцидентов в месяц — от triage и RCA до устойчивого устранения в Linux, сетях и мониторинге',
                'exp2-desc': '• Лидерство | Управление командой: руководство командой из 7 специалистов (Support Engineers и выездные техники) для более 25 клиентских площадок<br>• Развитие персонала | Коучинг: найм, адаптация и развитие более 6 сотрудников через onboarding, обучение и skill-матрицы<br>• Коммуникация | Управление конфликтами: успешное разрешение более 20 эскалированных клиентских кейсов в год<br>• Оптимизация процессов | Стратегическое мышление: консолидация более 12 инструментов в 4 стандартные платформы для снижения затрат<br>• Документирование | Управление знаниями: более 30 технических инструкций для инженеров и пользователей<br>• IT Security | Управление инфраструктурой: администрирование и защита Windows Server и AD (DNS, RDP, GPO) с более 500 AD-объектами в multi-tenant средах<br>• Сети | Решение проблем: оптимизация MikroTik WAN/LAN для multi-site клиентов (POS, VoIP, филиальные системы)<br>• Виртуализация | Высокая доступность: VMware ESXi и Hyper-V с более 350 ВМ и доступностью 99,9 %<br>• Vendor Management | Координация сервисов: управление внешними подрядчиками и SLA для VoIP, CCTV, СКУД, POS и печати (более 8000 устройств)<br>• Базы данных | Качество: сопровождение 1C и MS SQL, обеспечение консистентных бэкапов критичных приложений',
                'exp3-desc': '• IT Management | Лидерство: полная ответственность за IT-инфраструктуру клинической сети из 3 площадок, координация команды из 4 человек и внешних подрядчиков<br>• Управление проектами | Построение инфраструктуры: планирование, закупка и внедрение полной IT-инфраструктуры за 9 месяцев — от серверной до go-live<br>• Системная интеграция | Аналитика: интеграция DICOM/PACS с 5 модальностями медицинской визуализации<br>• IT Operations | Надёжность: стабильная работа 24/7 более 250 клинических и административных устройств без длительных простоев<br>• Переговоры | Бюджет: закупки и переговоры с поставщиками на сумму свыше 1 млн USD с учётом техтребований, гарантий и сроков',
                'exp4-desc': '• Первая линия технической поддержки пользователей: решение типовых проблем с оборудованием, ПО и доступом<br>• Диагностика и устранение неисправностей ПК, принтеров, периферии и базовых сетевых подключений<br>• Установка, настройка и сопровождение стандартного рабочего ПО и операционных систем<br>• Подготовка, развёртывание и замена рабочих станций и периферийного оборудования<br>• Помощь пользователям с доступом к учётным записям, паролями и стандартными приложениями<br>• Регистрация, отслеживание и документирование обращений, инцидентов и выполненных работ<br>• Эскалация сложных инцидентов в профильные IT-команды с контролем до закрытия<br>• Плановое профилактическое обслуживание рабочего оборудования для снижения сбоев<br>• Соблюдение установленных процедур IT-поддержки и понятная коммуникация с пользователями',
                'exp5-desc': '• Полный цикл проектирования, закупки, развёртывания и ввода в эксплуатацию IT-инфраструктуры аэропорта с нуля<br>• Планирование и стандартизация закупок ПК, принтеров, сетевого оборудования и IT-аппаратуры<br>• Проектирование, развёртывание и сопровождение корпоративной сети: замена оборудования, редизайн, балансировка нагрузки, подключение провайдеров<br>• Резервирование интернет-каналов через нескольких провайдеров и резервные каналы связи<br>• Администрирование Windows Server 2003/2008 и базовых сетевых сервисов аэропорта<br>• Координация IT-интеграции с авиакомпаниями, УВД, провайдерами и поставщиками оборудования<br>• IT-поддержка операционных подразделений: таможня, погранслужба, полиция, метеослужба, диспетчерская<br>• Wi-Fi hotspot с аутентификацией пользователей на PHP и MySQL<br>• Внедрение help desk на базе HESK для регистрации и отслеживания обращений<br>• Переговоры и работа с поставщиками IT-оборудования и интернет-провайдерами<br>• Введение стандартов оборудования и процессов для упрощения поддержки и снижения затрат<br>• Подбор и подготовка IT-персонала для дальнейшей эксплуатации инфраструктуры<br>• Успешная передача операционной IT-среды новой команде поддержки',
                'exp6-desc': '• Обеспечение стабильной работы IT-среды на ~120 рабочих станциях<br>• Администрирование корпоративной сети и Windows Server 2003/2008<br>• Поддержка пользователей: устранение инцидентов с оборудованием, ПО, сетью и доступом<br>• Диагностика, ремонт и обслуживание банкоматов, включая профилактику<br>• Инкассация банкоматов в соответствии с внутренними процедурами<br>• Обновление прошивок, диагностика, обслуживание и ремонт POS-терминалов<br>• Координация технических вопросов с сервисными провайдерами и внутренними подразделениями<br>• Ведение учёта обслуживания IT-оборудования, банкоматов и POS-терминалов',
                'exp7-desc': '• Retail IT Support | Выездной сервис: поддержка 3 розничных магазинов с выездами на место и по телефону (без инструментов удалённого доступа), обеспечение работы касс и бэк-офиса в рабочие часы<br>• POS Systems | Поддержка оборудования: обслуживание 6–12 кассовых линий на точку, включая фискальные регистраторы и мобильные терминалы, для минимизации простоев на кассе<br>• Store Infrastructure | Сетевая поддержка: сопровождение LAN магазинов и ПК менеджеров на нескольких точках для поддержания локальных систем в рабочем состоянии<br>• Field Service | Управление доступностью: устранение неисправностей на месте без remote-access инструментов, быстрый выездной отклик для критичных кассовых систем',
                
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
				'position': 'Senior IT System Administrator | Infrastructure | Linux | VMware | Automation',
				'email': 'kiykomi@gmail.com',
				'phone': '+49 (174) 496-96-29',
				'location': 'Люнен, Німеччина',
				'download-cv': 'Завантажити CV',
				
				// Language Options
				'lang-english': 'English',
				'lang-russian': 'Русский',
				'lang-german': 'Deutsch',
				'lang-ukrainian': 'Українська',
				
				// About
				'about': 'Про себе',
				'about-text': 'IT-системний адміністратор з 17-річним досвідом у інфраструктурі, системному адмініструванні та IT Operations у дослідницькому, медичному та корпоративному середовищах. Досвід експлуатації високодоступних Linux- та Windows-інфраструктур, віртуалізації, моніторингу та автоматизації адміністративних процесів. Досвід керівництва, розвинені навички вирішення проблем і сильна орієнтація на стабільність, безпеку та безперервну оптимізацію IT-систем.',
				
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
				'position-support': 'IT-системний адміністратор / IT-спеціаліст',
				'position-lead': 'Керівник команди підтримки',
				'position-sysadmin': 'IT-системний адміністратор / IT-менеджер',
				'position-it-support': 'Інженер IT-підтримки',
				'position-it-manager': 'IT-менеджер',
				'position-bank-lead': 'Провідний спеціаліст відділу інформаційної підтримки',
				'position-olmax': 'Системний адміністратор',
				'position-service': 'Провідний інженер (банкомати та POS-термінали)',
				
				// Company names
				'company-confidential': 'NDA',
				'company-bank': 'Банк «Надра»',
				'company-airport': 'Міжнародний аеропорт «Херсон»',
				'company-olmax': 'Olmax Systems',
				
				// Experience descriptions
				'exp1-desc': '• IT Operations | Клієнтоорієнтованість: стабільна підтримка L1/L2 для понад 150 співробітників і дослідників, надійна робота IT-сервісів у межах заданих SLA<br>• Системне адміністрування | Управління інфраструктурою: адміністрування понад 15 Linux-серверів, кампусної мережі та моніторингу (Zabbix/Grafana) з доступністю систем понад 99,5 %<br>• Автоматизація | Оптимізація процесів: розробка та впровадження понад 15 рішень на PowerShell, Bash, Python і Go, скорочення ручної роботи приблизно на 8 годин на тиждень<br>• Розробка ПЗ | Власна ініціатива: три внутрішні інструменти для інвентаризації, обробки тікетів і автоматизації процесів<br>• Моніторинг | Проактивне управління інцидентами: понад 50 автоматизованих правил для раннього виявлення критичних станів<br>• Документування | Управління знаннями: понад 25 runbook і SOP для стандартизації процесів і зменшення повторюваних звернень<br>• Вирішення проблем | Управління інцидентами: самостійний аналіз понад 10 інцидентів на місяць — від triage і RCA до стійкого усунення в Linux, мережах і моніторингу',
				'exp2-desc': '• Лідерство | Управління командою: керівництво командою з 7 фахівців (Support Engineers і польові техніки) для понад 25 клієнтських майданчиків<br>• Розвиток персоналу | Коучинг: найм, адаптація та розвиток понад 6 співробітників через onboarding, навчання та skill-матриці<br>• Комунікація | Управління конфліктами: успішне вирішення понад 20 ескальованих клієнтських кейсів на рік<br>• Оптимізація процесів | Стратегічне мислення: консолідація понад 12 інструментів у 4 стандартні платформи для зниження витрат<br>• Документування | Управління знаннями: понад 30 технічних інструкцій для інженерів і користувачів<br>• IT Security | Управління інфраструктурою: адміністрування та захист Windows Server і AD (DNS, RDP, GPO) з понад 500 AD-об\'єктами в multi-tenant середовищах<br>• Мережі | Вирішення проблем: оптимізація MikroTik WAN/LAN для multi-site клієнтів (POS, VoIP, філіальні системи)<br>• Віртуалізація | Висока доступність: VMware ESXi і Hyper-V з понад 350 ВМ і доступністю 99,9 %<br>• Vendor Management | Координація сервісів: управління зовнішніми підрядниками та SLA для VoIP, CCTV, СКД, POS і друку (понад 8000 пристроїв)<br>• Бази даних | Якість: супровід 1C і MS SQL, забезпечення консистентних бекапів критичних застосунків',
				'exp3-desc': '• IT Management | Лідерство: повна відповідальність за IT-інфраструктуру клінічної мережі з 3 майданчиків, координація команди з 4 осіб і зовнішніх підрядників<br>• Управління проєктами | Побудова інфраструктури: планування, закупівля та впровадження повної IT-інфраструктури за 9 місяців — від серверної до go-live<br>• Системна інтеграція | Аналітика: інтеграція DICOM/PACS з 5 модальностями медичної візуалізації<br>• IT Operations | Надійність: стабільна робота 24/7 понад 250 клінічних і адміністративних пристроїв без тривалих простоїв<br>• Переговори | Бюджет: закупівлі та переговори з постачальниками на суму понад 1 млн USD з урахуванням техвимог, гарантій і термінів',
				'exp4-desc': '• Перша лінія технічної підтримки користувачів: вирішення типових проблем з обладнанням, ПЗ і доступом<br>• Діагностика та усунення несправностей ПК, принтерів, периферії та базових мережевих підключень<br>• Встановлення, налаштування та супровід стандартного робочого ПЗ та операційних систем<br>• Підготовка, розгортання та заміна робочих станцій і периферійного обладнання<br>• Допомога користувачам з доступом до облікових записів, паролями та стандартними застосунками<br>• Реєстрація, відстеження та документування звернень, інцидентів і виконаних робіт<br>• Ескалація складних інцидентів у профільні IT-команди з контролем до закриття<br>• Планове профілактичне обслуговування робочого обладнання для зниження збоїв<br>• Дотримання встановлених процедур IT-підтримки та зрозуміла комунікація з користувачами',
				'exp5-desc': '• Повний цикл проєктування, закупівлі, розгортання та введення в експлуатацію IT-інфраструктури аеропорту з нуля<br>• Планування та стандартизація закупівель ПК, принтерів, мережевого обладнання та IT-апаратури<br>• Проєктування, розгортання та супровід корпоративної мережі: заміна обладнання, редизайн, балансування навантаження, підключення провайдерів<br>• Резервування інтернет-каналів через кількох провайдерів і резервні канали зв\'язку<br>• Адміністрування Windows Server 2003/2008 і базових мережевих сервісів аеропорту<br>• Координація IT-інтеграції з авіакомпаніями, УВД, провайдерами та постачальниками обладнання<br>• IT-підтримка операційних підрозділів: митниця, прикордонслужба, поліція, метеослужба, диспетчерська<br>• Wi-Fi hotspot з аутентифікацією користувачів на PHP і MySQL<br>• Впровадження help desk на базі HESK для реєстрації та відстеження звернень<br>• Переговори та робота з постачальниками IT-обладнання та інтернет-провайдерами<br>• Впровадження стандартів обладнання та процесів для спрощення підтримки та зниження витрат<br>• Підбір і підготовка IT-персоналу для подальшої експлуатації інфраструктури<br>• Успішна передача операційного IT-середовища новій команді підтримки',
				'exp6-desc': '• Забезпечення стабільної роботи IT-середовища на ~120 робочих станціях<br>• Адміністрування корпоративної мережі та Windows Server 2003/2008<br>• Підтримка користувачів: усунення інцидентів з обладнанням, ПЗ, мережею та доступом<br>• Діагностика, ремонт і обслуговування банкоматів, включно з профілактикою<br>• Інкасація банкоматів відповідно до внутрішніх процедур<br>• Оновлення прошивок, діагностика, обслуговування та ремонт POS-терміналів<br>• Координація технічних питань із сервісними провайдерами та внутрішніми підрозділами<br>• Ведення обліку обслуговування IT-обладнання, банкоматів і POS-терміналів',
				'exp7-desc': '• Retail IT Support | Виїзний сервіс: підтримка 3 роздрібних магазинів з виїздами на місце та по телефону (без інструментів віддаленого доступу), забезпечення роботи кас і бек-офісу в робочі години<br>• POS Systems | Підтримка обладнання: обслуговування 6–12 касових ліній на точку, включно з фіскальними реєстраторами та мобільними терміналами, для мінімізації простоїв на касі<br>• Store Infrastructure | Мережева підтримка: супровід LAN магазинів і ПК менеджерів на кількох точках для підтримання локальних систем у робочому стані<br>• Field Service | Управління доступністю: усунення несправностей на місці без remote-access інструментів, швидкий виїзний відгук для критичних касових систем',
				
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
                'position': 'Senior IT System Administrator | Infrastructure | Linux | VMware | Automation',
                'email': 'kiykomi@gmail.com',
                'phone': '+49 (174) 496-96-29',
                'location': 'Lünen, Deutschland',
                'download-cv': 'Lebenslauf herunterladen',
                
                // Language Options
                'lang-english': 'English',
                'lang-russian': 'Русский',
                'lang-german': 'Deutsch',
                'lang-ukrainian': 'Українська',
                
                // About
                'about': 'Über mich',
                'about-text': 'IT-Systemadministrator mit 17 Jahren Erfahrung in Infrastruktur, Systemadministration und IT Operations in Forschungs-, Gesundheits- und Unternehmensumgebungen. Erfahrung im Betrieb hochverfügbarer Linux- und Windows-Infrastrukturen, Virtualisierung, Monitoring sowie Automatisierung administrativer Prozesse. Führungserfahrung, ausgeprägte Problemlösungskompetenz und starke Ausrichtung auf Stabilität, Sicherheit und kontinuierliche Optimierung von IT-Systemen.',
                
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
                'position-support': 'IT-Systemadministrator / IT-Fachinformatiker',
                'position-lead': 'Support Teamleiter',
                'position-sysadmin': 'IT-Systemadministrator / IT-Manager',
                'position-it-support': 'IT Support Engineer',
                'position-it-manager': 'IT-Manager',
                'position-bank-lead': 'Lead Specialist, Information Support Department',
                'position-olmax': 'Systemadministrator',
                'position-service': 'Service Engineer (Geldautomaten und POS-Terminals)',
                
                // Company names
                'company-confidential': 'NDA',
                'company-bank': 'Bank «Nadra»',
                'company-airport': 'Internationaler Flughafen «Cherson»',
                'company-olmax': 'Olmax Systems',
                
                // Experience descriptions
                'exp1-desc': '• IT Operations | Serviceorientierung: Sicherstellung des stabilen L1/L2-Supports für mehr als 150 Mitarbeitende und Forschende sowie Gewährleistung eines zuverlässigen Betriebs der IT-Services unter Einhaltung definierter Service Levels<br>• Systemadministration | Infrastrukturmanagement: Administration von über 15 Linux-Servern, dem Campus-Netzwerk sowie der Monitoring-Infrastruktur (Zabbix/Grafana) zur Sicherstellung einer Systemverfügbarkeit von über 99,5 % im Produktivbetrieb<br>• Automatisierung | Prozessoptimierung: Entwicklung und Implementierung von über 15 Automatisierungslösungen mit PowerShell, Bash, Python und Go, wodurch der manuelle Administrationsaufwand um rund 8 Stunden pro Woche reduziert und Fehler bei Patch- und Provisionierungsprozessen minimiert wurden<br>• Softwareentwicklung | Eigeninitiative: Entwicklung von drei internen Tools zur Inventarisierung, Ticketbearbeitung und Prozessautomatisierung, wodurch Supportprozesse beschleunigt und teamübergreifende Übergaben reduziert wurden<br>• Monitoring | Proaktives Incident Management: Einführung von mehr als 50 automatisierten Überwachungsregeln zur frühzeitigen Erkennung kritischer Systemzustände und Vermeidung nutzerrelevanter Ausfälle<br>• Dokumentationskompetenz | Wissensmanagement: Erstellung von über 25 Runbooks und Standard Operating Procedures (SOPs), wodurch die Standardisierung administrativer Prozesse verbessert und wiederkehrende Supportanfragen reduziert wurden<br>• Problemlösungskompetenz | Incident Management: Eigenverantwortliche Analyse und Bearbeitung von mehr als zehn Incidents pro Monat – von der Triage über Root Cause Analysis bis zur nachhaltigen Fehlerbehebung – in den Bereichen Linux, Netzwerk und Monitoring',
                'exp2-desc': '• Führungskompetenz | Teammanagement: Leitung eines siebenköpfigen Support-Teams (Support Engineers und Außendiensttechniker) für mehr als 25 Kundenstandorte mit dem Ziel, Reaktionszeiten zu verkürzen und die Erstlösungsquote nachhaltig zu verbessern<br>• Personalentwicklung | Coaching: Rekrutierung, Einarbeitung und fachliche Entwicklung von mehr als sechs Mitarbeitenden durch strukturierte Onboarding-Prozesse, Schulungsprogramme und Skill-Matrizen<br>• Kommunikationsfähigkeit | Konfliktmanagement: Erfolgreiche Moderation von über 20 eskalierten Kundenfällen pro Jahr durch lösungsorientierte Kommunikation und nachhaltige Ursachenanalyse zur Sicherung langfristiger Kundenbeziehungen<br>• Prozessoptimierung | Strategisches Denken: Konsolidierung von mehr als zwölf eingesetzten Tools auf vier Standardplattformen zur Senkung der Betriebskosten, Vereinfachung der Administration und Optimierung interner Abläufe<br>• Dokumentationskompetenz | Wissensmanagement: Erstellung von über 30 technischen Anleitungen für Support Engineers und Endanwender zur Beschleunigung des Onboardings und Reduzierung wiederkehrender L1-Anfragen<br>• IT-Security | Infrastrukturmanagement: Administration und Absicherung von Windows-Server- und Active-Directory-Infrastrukturen (DNS, RDP, GPO) mit über 500 AD-Objekten in Multi-Tenant-Umgebungen<br>• Netzwerkadministration | Problemlösungskompetenz: Optimierung von MikroTik-WAN- und LAN-Infrastrukturen für Multi-Site-Kunden zur Gewährleistung einer stabilen Anbindung von POS-, VoIP- und Filialsystemen<br>• Virtualisierung | Hochverfügbarkeit: Betrieb von VMware-ESXi- und Hyper-V-Infrastrukturen mit mehr als 350 virtuellen Maschinen und einer Verfügbarkeit von 99,9 % für produktive Unternehmenssysteme<br>• Vendor Management | Servicekoordination: Steuerung externer Dienstleister und SLA-Management für VoIP-, CCTV-, Zutrittskontroll-, POS- und Drucksysteme mit über 8.000 Endgeräten<br>• Datenbankadministration | Qualitätsbewusstsein: Betreuung von 1C- und MS-SQL-Systemen für mehrere Kunden sowie Sicherstellung konsistenter Backups und der Betriebsfähigkeit geschäftskritischer Anwendungen',
                'exp3-desc': '• IT-Management | Führungskompetenz: Gesamtverantwortung für die IT-Infrastruktur eines Klinikverbundes mit drei Standorten sowie fachliche Koordination eines vierköpfigen Teams und externer Dienstleister<br>• Projektmanagement | Infrastrukturaufbau: Planung, Beschaffung und erfolgreiche Implementierung der kompletten IT-Infrastruktur – von Serverraum und Netzwerken bis zum produktiven Go-live – innerhalb von neun Monaten<br>• Systemintegration | Analytisches Denken: Integration eines DICOM/PACS-Systems mit fünf medizinischen Bildgebungsmodalitäten zur Sicherstellung eines effizienten digitalen Datenaustauschs im klinischen Umfeld<br>• IT Operations | Zuverlässigkeit: Sicherstellung des stabilen 24/7-Betriebs von über 250 klinischen und administrativen Endgeräten ohne längerfristige Ausfälle während der Projektlaufzeit<br>• Verhandlungsführung | Budgetverantwortung: Durchführung von Lieferantenverhandlungen und Koordination von Beschaffungsprojekten im Umfang von über 1 Mio. USD unter Berücksichtigung technischer Anforderungen, Garantiebedingungen und Lieferfristen',
                'exp4-desc': '• First-Level-Technischer Support für Endanwender und Lösung routinemäßiger Hardware-, Software- und Zugriffsprobleme<br>• Diagnose und Fehlerbehebung an Desktop-PCs, Druckern, Peripheriegeräten und grundlegenden Netzwerkverbindungen<br>• Installation, Konfiguration und Wartung von Standard-Arbeitsplatzsoftware und Betriebssystemen<br>• Vorbereitung, Bereitstellung und Austausch von Arbeitsplätzen und Peripheriegeräten<br>• Unterstützung bei Kontozugriff, Passwort-Anfragen und Standard-Arbeitsplatzanwendungen<br>• Erfassung, Nachverfolgung und Dokumentation von Supportanfragen, Incidents und erledigten Arbeiten<br>• Eskalation komplexer Incidents an zuständige IT-Teams mit Nachverfolgung bis zur Lösung<br>• Routinemäßige vorbeugende Wartung von Arbeitsplatzgeräten zur Reduzierung nutzerrelevanter Ausfälle<br>• Einhaltung etablierter IT-Support-Prozeduren und klare Kommunikation mit Anwendern',
                'exp5-desc': '• End-to-End-Planung, Beschaffung, Bereitstellung und Inbetriebnahme der IT-Infrastruktur des Flughafens von Grund auf<br>• Planung und Standardisierung der Beschaffung von PCs, Druckern, Netzwerkgeräten und IT-Hardware für den Flughafenbetrieb<br>• Design, Bereitstellung und Wartung des Unternehmensnetzwerks inkl. kompletter Geräteersetzung, Redesign, Lastverteilung und Provider-Anbindung<br>• Redundante Internetanbindung durch mehrere Provider und Backup-Kommunikationskanäle<br>• Administration von Windows Server 2003/2008 und zentraler Netzwerkdienste für den Flughafenbetrieb<br>• Koordination der IT-Integration mit Airlines, Flugsicherung, ISPs und externen Geräteanbietern<br>• IT-Support für operative Abteilungen: Zoll, Grenzschutz, Polizei, Meteorologie, Disposition und weitere Dienste<br>• Wi-Fi-Hotspot-Lösung mit Benutzerauthentifizierung auf Basis von PHP und MySQL<br>• Implementierung eines HESK-basierten Helpdesk-Systems zur Erfassung und Verwaltung von Supportanfragen<br>• Verhandlungen und Pflege von Beziehungen zu IT-Ausrüstern und Internetprovidern<br>• Einführung von Hardware- und Betriebsstandards zur Vereinfachung des Supports und Kostensenkung<br>• Rekrutierung und Vorbereitung von IT-Personal für den laufenden Betrieb nach Projektabschluss<br>• Erfolgreiche Übergabe der operativen IT-Umgebung an das neu aufgebaute Support-Team',
                'exp6-desc': '• Sicherstellung des zuverlässigen Betriebs einer IT-Umgebung mit ca. 120 PCs<br>• Administration des Unternehmensnetzwerks und der Windows Server 2003/2008-Infrastruktur<br>• Laufender Endanwender-Support und Behebung von Hardware-, Software-, Netzwerk- und Zugriffsproblemen<br>• Diagnose, Reparatur und Wartung von Geldautomaten inkl. vorbeugender Instandhaltung<br>• Geldautomaten-Befüllung gemäß internen Betriebsverfahren<br>• Firmware-Updates, Diagnose, Wartung und Reparatur von POS-Terminals<br>• Koordination technischer Fragen mit Dienstleistern und internen Abteilungen<br>• Führung von Serviceunterlagen für IT-Geräte, Geldautomaten und POS-Terminals',
                'exp7-desc': '• Retail IT Support | Vor-Ort-Service: Unterstützung von 3 Einzelhandelsgeschäften mit Vor-Ort-Besuchen und Telefon-Support (ohne Remote-Tools), Sicherstellung des laufenden Kassen- und Backoffice-Betriebs während der Geschäftszeiten<br>• POS Systems | Hardware-Support: Wartung von 6–12 POS-Kassen pro Standort inkl. Fiskalregistrierkassen und mobilen Terminals zur Minimierung von Kassenausfällen<br>• Store Infrastructure | Netzwerk-Support: Support von Filial-LAN und Manager-PCs an mehreren Standorten zur Aufrechterhaltung der lokalen Systeme<br>• Field Service | Verfügbarkeitsmanagement: Vor-Ort-Fehlerbehebung ohne Remote-Access-Tools für schnelle Reaktion bei geschäftskritischen Kassensystemen',
                
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
                'position': 'Senior IT System Administrator | Infrastructure | Linux | VMware | Automation',
                'email': 'kiykomi@gmail.com',
                'phone': '+49 (174) 496-96-29',
                'location': 'Lünen, Germany',
                'download-cv': 'Download CV',
                
                // Language Options
                'lang-english': 'English',
                'lang-russian': 'Русский',
                'lang-german': 'Deutsch',
                'lang-ukrainian': 'Українська',
                
                // About
                'about': 'About Me',
                'about-text': 'IT System Administrator with 17 years of experience in infrastructure, system administration, and IT operations across research, healthcare, and corporate environments. Experienced in operating highly available Linux and Windows infrastructures, virtualization, monitoring, and automation of administrative processes. Leadership experience, strong problem-solving skills, and a clear focus on stability, security, and continuous optimization of IT systems.',
                
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
                'position-support': 'IT System Administrator / IT Specialist',
                'position-lead': 'Support Team Lead',
                'position-sysadmin': 'IT System Administrator / IT Manager',
                'position-it-support': 'IT Support Engineer',
                'position-it-manager': 'IT Manager',
                'position-bank-lead': 'Lead Specialist, Information Support Department',
                'position-olmax': 'System Administrator',
                'position-service': 'Service Engineer (ATMs and POS terminals)',
                
                // Company names
                'company-confidential': 'NDA',
                'company-bank': 'Bank "Nadra"',
                'company-airport': 'International Airport "Kherson"',
                'company-olmax': 'Olmax Systems',
                
                // Experience descriptions
                'exp1-desc': '• IT Operations | Service Orientation: ensuring stable L1/L2 support for 150+ employees and researchers, delivering reliable IT services within defined SLAs<br>• System Administration | Infrastructure Management: administering 15+ Linux servers, campus network, and monitoring infrastructure (Zabbix/Grafana) with over 99.5% system availability in production<br>• Automation | Process Optimization: developing and implementing 15+ automation solutions with PowerShell, Bash, Python, and Go, reducing manual admin effort by ~8 hours per week<br>• Software Development | Own Initiative: building three internal tools for inventory, ticket handling, and process automation to speed up support and reduce handoffs<br>• Monitoring | Proactive Incident Management: introducing 50+ automated monitoring rules for early detection of critical system states<br>• Documentation | Knowledge Management: creating 25+ runbooks and SOPs to standardize admin processes and reduce recurring support requests<br>• Problem Solving | Incident Management: independently analyzing 10+ incidents per month — from triage and root cause analysis to sustainable fixes in Linux, networking, and monitoring',
                'exp2-desc': '• Leadership | Team Management: leading a seven-person support team (support engineers and field technicians) across 25+ customer sites to improve response times and first-call resolution<br>• People Development | Coaching: recruiting, onboarding, and developing 6+ employees through structured onboarding, training programs, and skill matrices<br>• Communication | Conflict Management: successfully mediating 20+ escalated customer cases per year through solution-oriented communication and sustainable root cause analysis<br>• Process Optimization | Strategic Thinking: consolidating 12+ tools into four standard platforms to reduce operating costs and simplify administration<br>• Documentation | Knowledge Management: creating 30+ technical guides for support engineers and end users to accelerate onboarding and reduce recurring L1 requests<br>• IT Security | Infrastructure Management: administering and securing Windows Server and Active Directory infrastructures (DNS, RDP, GPO) with 500+ AD objects in multi-tenant environments<br>• Network Administration | Problem Solving: optimizing MikroTik WAN/LAN infrastructures for multi-site customers to ensure stable connectivity for POS, VoIP, and branch systems<br>• Virtualization | High Availability: operating VMware ESXi and Hyper-V infrastructures with 350+ VMs and 99.9% availability for production business systems<br>• Vendor Management | Service Coordination: managing external providers and SLA for VoIP, CCTV, access control, POS, and printing systems with 8,000+ endpoints<br>• Database Administration | Quality Focus: maintaining 1C and MS SQL systems for multiple customers, ensuring consistent backups and business-critical application availability',
                'exp3-desc': '• IT Management | Leadership: full responsibility for IT infrastructure of a three-site clinic network, coordinating a four-person team and external providers<br>• Project Management | Infrastructure Build-out: planning, procurement, and successful implementation of complete IT infrastructure — from server room and networks to production go-live — within nine months<br>• System Integration | Analytical Thinking: integrating a DICOM/PACS system with five medical imaging modalities for efficient digital data exchange in clinical environments<br>• IT Operations | Reliability: ensuring stable 24/7 operation of 250+ clinical and administrative endpoints without prolonged outages during the project<br>• Negotiation | Budget Responsibility: conducting supplier negotiations and coordinating procurement projects worth over $1M USD, considering technical requirements, warranty terms, and delivery timelines',
                'exp4-desc': '• Provided first-line technical support to end users and resolved routine hardware, software, and access-related issues<br>• Diagnosed and troubleshot desktop PCs, printers, peripherals, and basic network connectivity problems<br>• Installed, configured, and maintained standard workplace software and operating systems<br>• Prepared, deployed, and replaced user workstations and peripheral equipment when required<br>• Assisted users with account access, password-related requests, and standard workplace applications<br>• Logged, tracked, and documented support requests, incidents, and completed work<br>• Escalated complex incidents to relevant IT teams and followed up until resolution<br>• Performed routine preventive maintenance of workplace equipment to reduce user-impacting failures<br>• Followed established IT support procedures and maintained clear communication with users',
                'exp5-desc': '• Led the end-to-end design, procurement, deployment, and commissioning of the airport\'s IT infrastructure from the ground up<br>• Planned and standardized the procurement of PCs, printers, network equipment, and related IT hardware for airport operations<br>• Designed, deployed, and maintained the enterprise network, including complete network equipment replacement, redesign, load distribution, and provider connectivity<br>• Established redundant Internet connectivity by onboarding multiple service providers and implementing backup communication channels<br>• Administered Windows Server 2003/2008 infrastructure and supported core network services for airport operations<br>• Coordinated IT integration and technical communication with airlines, air traffic services, ISPs, and external equipment suppliers<br>• Provided and coordinated IT support for operational departments including customs, border control, police, meteorology, dispatch, and other internal services<br>• Built a Wi-Fi hotspot solution with user authentication based on PHP and MySQL<br>• Implemented and configured a HESK-based help desk system to register, track, and manage user support requests<br>• Negotiated and maintained working relationships with leading local IT equipment suppliers and Internet service providers<br>• Introduced hardware and operational standards to simplify support, improve compatibility, and reduce procurement and maintenance costs<br>• Recruited and prepared IT personnel to provide ongoing support and maintenance after project completion<br>• Successfully handed over the operational IT environment to the newly established support team',
                'exp6-desc': '• Ensured the reliable operation of an IT environment supporting approximately 120 PCs<br>• Administered the enterprise network and Windows Server 2003/2008 infrastructure<br>• Provided ongoing end-user support and resolved hardware, software, network, and access-related incidents<br>• Diagnosed, repaired, and maintained ATMs, including preventive maintenance and fault resolution<br>• Performed ATM cash replenishment in accordance with internal operational procedures<br>• Performed firmware updates, diagnostics, maintenance, and repair of POS terminals<br>• Coordinated technical issues with relevant service providers and internal departments when required<br>• Maintained service records for IT equipment, ATMs, and POS terminals',
                'exp7-desc': '• Retail IT Support | On-Site Service: Supported 3 retail stores with on-site visits and phone support (no remote tooling available), ensuring checkout and back-office operations remained running during business hours<br>• POS Systems | Hardware Support: Maintained 6–12 POS lanes per location, including fiscal registers and mobile terminals, to minimize checkout downtime<br>• Store Infrastructure | Network Support: Supported store LAN and manager PCs across multiple retail locations to keep local systems operational<br>• Field Service | Availability Management: Delivered in-person troubleshooting without remote-access tools, ensuring fast on-site response for business-critical checkout systems',
                
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
