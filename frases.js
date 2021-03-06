//const videoUrl = 'видео.атм-мотивация.рф';
//const url = '\n<a href = "'+videoUrl+'">Ссылка на видео</a>';
const videos = require('./videos')
module.exports = {

    homeTrigger: 'Если Вам нужна дополнительная информация или что-то было не до конца понятно, выберете пункт из команд ниже.\n' +
    '\n' +
    'Внимание: доступ к следующему видео-уроку откроется завтра в 07:00 по Мск.\n' +
    '\n1 - План курса ' +
    '\n2 - Об авторе и спикере видео-уроков' +
    '\n3 - О компании ATManagement Group',

    // about: 'Этот бот разработан компанией helpexcel в 2018 году.\n\nРазработчик: +79151272664 (Алексей)'+
    // '\n\nБот-помошник: @helpexcel_bot \n\nСайт: http://helpexcel.pro/',

    plan: 'Курс состоит из 3 видео-уроков, на которых Вы разберетесь в "безокладной" системе мотивации персонала:\n' +
    'Урок 1. Как оклады убивают мотивацию персонала\n' +
    'Урок 2. «Плюсы» и «минусы» различных систем \n' +
    'оплаты труда\n' +
    'Урок 3. «Безокладная» система. Критерии оценки \n' +
    'индивидуальных достижений каждого сотрудника\n' +
    '\n' +
    'Не теряйте время и деньги! Переходите к просмотру видео прямо сейчас! ',
    aboutTime: 'Курс состоит из 3 видео-уроков, каждый из которых длится 10-12 минут:\n' +
    'Урок 1. Как оклады убивают мотивацию персонала\n' +
    'Урок 2. «Плюсы» и «минусы» различных систем\n' +
    'оплаты труда\n' +
    'Урок 3. «Безокладная» система. Критерии оценки \n' +
    'индивидуальных достижений каждого сотрудника \n' +
    '\n' +
    'Лайфхак: в настройках видео по умолчанию стоит обычная скорость воспроизведения. Если поменять ее на скорость 1.5, то Вы сможете ускорить процесс и просмотреть видео в 1,5 раза быстрее! \n' +
    '\n' +
    'Не теряйте время и деньги! Переходите к просмотру видео прямо сейчас! ',
    aboutHelp: 'Более 15 лет занимается вопросами финансов, 17 лет успешной предпринимательской деятельности. Помогла вывести десятки компаний из кризисных ситуаций. \n' +
    '\n' +
    'Спикер, бизнес-тренер и действующий финансовый директор международного холдинга ATManagment Group. \n' +
    '\n' +
    'За 17 лет, Ирина была владельцем и генеральным директором нескольких бизнесов в различных отраслях: ресторан, юридическое агентство, кадровое агентство, тренинговая компания и другие. \n' +
    '\n' +
    'Создала мощнейшую программу по управлению финансам – курс «Финансовое планирование», который успешно завершили 1500 предпринимателей по всему СНГ. А с осени 2016 года, данный курс был полностью переведен и с успехом предоставляется в США.\n' +
    '\n' +
    'Лично реализовала 120 консалтинговых проектов по внедрению финансового планирования и как итог, рост прибыли в компаниях составил от 20 до 230 %.\n' +
    '\n' +
    'За время карьеры спикера провела более 400 семинаров, тренингов и т.д. общей численностью участников более 5500.\n' +
    '\n' +
    'Обычные результаты клиентов, с которыми работала Ирина: \n' +
    '\n' +
    'Уменьшение кредиторской задолженности за 1,5 года на 83% \n' +
    'За 2 года погашение всех кредитов (до окончания кредитных договоров) \n' +
    'Прирост по доходу вместо запланированных 15% за год, 32% за первые 5 месяцев \n' +
    'Увеличение чистой прибыли на 300% за период менее, чем в 10 месяцев \n' +
    'Рост фондов учредителя на 200% менее, чем за 6 недель\n' +
    '\n' +
    'Автор книги и мастер-класса "ГДЕНЬГИ".',
    difference: 'Основное направление компании ATManagement Group – это финансовый коучинг. Коучи внедряют в компании клиентов технологию финансового планирования, что позволяет клиентам увеличивать прибыль и резервы, оптимизировать расходы и систему начисления заработной платы, упорядочить финансовые потоки, прогнозировать будущие финансовые условия.\n' +
    '\n' +
    'Основное наше отличие в том, что мы не теоретики, а практики. Инструменты управления, которым мы обучаем и которые внедряем, лежат в основе деятельности нашей компании. Внедряем конкретные инструменты технологии управления не просто ради внедрения, а только для выведения компании клиента на новый финансовый уровень.\n' +
    '\n' +
    'Компания была создана в Санкт-Петербурге в октябре 2006 года в связи с объединением самостоятельно работающих коучев в области управления. Ее учредителями и руководителями стали успешные предприниматели.\n' +
    '\n' +
    'Параллельно был открыт офис в Латвии (г. Рига). На сегодняшний день в Рижском офисе работают программисты, которые совершенствуют и развивают возможности компьютерной программы Admin Solution of Management.\n' +
    '\n' +
    'В 2011 году компания ATManagement Group открыла офис в США, штат Флорида. В Американском офисе компании предоставляются Продвинутые Услуги ведущими коучами и спикерами.\n' +
    '\n' +
    'Коучи ATManagement Group предоставляют финансовый коучинг клиентам из разных регионов России и стран СНГ (Украина, Белоруссия, Молдавия, Казахстан, Кыргызстан). Клиенты компании – это владельцы, директора малого, среднего и крупного бизнеса.\n',


    start: 'Привет!\n' +
    '\n' +
    'Меня зовут Ирина Нарчемашвили, я - персональный бот-помощник действующего тренера компания АТМ. \n' +
    '\n' +
    'Меня создали специально для поддержки предпринимателей 24/7 и рассылки полезного контента из сферы развития бизнеса.' +
    '\nНапиши "start" чтобы продолжить',

    video1: 'Вы интересовались видео-уроками по "безокладной" системе мотивации персонала. \n' +
    '\n' +
    'Наша программа рассчитана на постепенное освоение материала, поэтому мы предоставляем доступы к видео-урокам одно за другим. Если вы не успеете посмотреть какой-либо из уроков, то сможете сделать это после полного открытия 3-х уроков и обязательно друг за другом.\n' +
    '\n' +
    'Итак. поздравляем, Вам открыт доступ к первому уроку: \n' +
    '"Как оклады убивают мотивацию персонала". \n' +
    'Длительность 10 минут.\n' +
    '\n' +
    'Из него Вы узнаете: \n' +
    '- какая статья расходов разоряет Ваш бизнес; \n' +
    '- почему бизнес часто уходит в минус при неправильной системе начисления заработной платы сотрудникам; \n' +
    '- как уборщица влияет на доход компании. \n\n' +
    'Для просмотра нажмите на ссылку \n' + videos.video1 + '!',

    video2: 'Если вчера Вы не успели изучить первое видео, вы можете посмотреть оба видео сейчас – 1 и 2. На этой уйдет не более 20 минут. \n' +
    '\n' +
    'Второй урок:\n' +
    '"Плюсы и минусы различных систем оплаты труда". \n' +
    '\n' +
    'В нем мы рассмотрим разные системы мотивации персонала и остановимся подробно на системе начисления заработной платы, при которой каждый сотрудник заинтересован в росте прибыли компании.\n' +
    '\n' +
    '"Такое вообще реально?", - спросите Вы. \n' +
    '\n' +
    'ДА!!! \n' +
    '\n' +
    'Жмите скорее на ссылку ' + videos.video2 + '!',
    video3: 'Вам открыт доступ к третьему видео-уроку: \n' +
    '"Безокладная» система. Критерии оценки индивидуальных достижений каждого сотрудника". \n' +
    '\n' +
    'В нем содержаться конкретные рекомендации и примеры внедрения данной системы. \n' +
    '\n' +
    'Вы готовы применить их на практике? \n' +
    '\n' +
    'Тогда жмите скорее на ссылку ' + videos.video3 + '!',
    noPayVideo3_1: 'Поздравляем, Вы посмотрели 3 видео-урока!\n' +
    '\n' +
    'После записи на мастер-класс, в течение трех часов Вы узнаете: \n' +
    '- какие области компании напрямую влияют на прибыль; \n' +
    '- как развивать компанию на основе показателей эффективности персонала; \n' +
    '- об инструментах увеличения прибыли и правилах денег.\n' +
    '\n' +
    'Если Вы хотите оплатить мастер-класс, но еще не успели это сделать, то проходите по кнопке "Перейти к оплате"\n' +
    '\n' +
    'Если Вы хотите узнать подробнее о мастер-классе "Гденьги. Как тратить, чтобы зарабатывать", нажмите - "Узнать где деньги"\n' +
    '\n' +
    'Узнать где деньги: ' + videos.video3npPay1,
    noPayVideo3_2: 'В дополнение материалов по мотивации персонала Вам открыт доступ к новым данным, которые помогут Вам разобраться в том, как управлять компанией на основе статистик. \n' +
    '\n' +
    '3 видео урока ждут Вас!\n' +
    '\n' +
    'Первое видео "Как увидеть стратегическую картину компании, а не просто таблицы с цифрами". Из него Вы узнаете: \n' +
    '- какие важные показали статистики отображают общую картину компании?\n' +
    '- какой отчетный период наиболее эффективен для работы со статистиками персонала? И как повлиять на показатели сотрудников вовремя? \n' +
    '- Как измерить статистики и подстатистики менеджера по продажам и HR-специалиста?\n' +
    '\n' +
    'Нажимайте "Продолжить обучение"!' +
    '\n\nПродолжить обучение - ' + videos.video3npPay2_next + '\nПодробнее о курсе - ' + videos.video3npPay2_about,
    noPayVideo3_3: 'Если вчера Вы не успели изучить первое видео, вы можете посмотреть оба видео сейчас – 1 и 2. На этой уйдет не более 20 минут. \n' +
    '\n' +
    'Второй урок:\n' +
    '"Взаимное влияние статистик в компании". \n' +
    '\n' +
    'В нем мы рассмотрим:\n' +
    '- из каких трех сфер состоит любой пост в компании; \n' +
    '- зачем измерять ЦКП (ценный конечный продукт) каждого сотрудника;\n' +
    '- как статистики влияют на результат и друг на друга внутри компании. \n' +
    'Жмите скорее на ссылку '+videos.video3npPay3+'! ',
    noPayVideo3_4:'Вам открыт доступ к третьему видео-уроку: \n' +
    '"Как измерить ключевые области компании с помощью статистик". \n' +
    '\n' +
    'В нем мы разберем:\n' +
    '- ключевые области компании - что измерять?\n' +
    '- какие статистики влияют на область управления, персонала, маркетинга, бухгалтерии, производства;\n' +
    '- как влиять на статистики ключевых областей?\n' +
    '\n' +
    'Интересно? Тогда жмите скорее на ссылку '+videos.video3npPay4,
    noPayVideo3_5:'Ура! Вы еще на один шаг приблизились к изобилию в Вашем бизнесе!\n' +
    '\n' +
    'После записи на мастер-класс, в течение трех часов Вы узнаете: \n' +
    '- какие области компании напрямую влияют на прибыль; \n' +
    '- как развивать компанию на основе показателей эффективности персонала; \n' +
    '- об инструментах увеличения прибыли и правилах денег.\n' +
    '\n' +
    'Если Вы хотите оплатить мастер-класс, но еще не успели это сделать, то проходите по кнопке "Перейти к оплате"\n' +
    '\n' +
    'Если Вы хотите узнать подробнее о мастер-классе "Гденьги. Как тратить, чтобы зарабатывать", нажмите - "Узнать где деньги"\n' +
    '\n' +
    'Узнать где деньги: ' + videos.video3npPay5,
    video4: 'Поздравляем, Вам открыт доступ к мастер-классу "Гденьги. Как тратить, чтобы зарабатывать".\n' +
    '\n' +
    'Чтобы его просмотреть, пройдите по ссылке - '+videos.video4,
    //HaveYouWatched:'Вы успели посмотреть курс или еще в процессе?\n',
    video4_1: 'Так много всего сразу! И это только часть.\n' +
    '\n' +
    'Шестичасовой онлайн-интенсив ждет Вас впереди. Будет жарко! Еще больше упражнений и расчетов для Вашего бизнеса!  \n' +
    '\n' +
    'Онлайн-интенсив  "Финансовое планирование" - это 6 часов выжимки самого полезного и практического материала из двухдневного 16-часового семинара. \n' +
    'После его просмотра, у Вас появится видение полной картины управления финансами в компании и пошаговый план действий по внедрению инструментов финансового планирования.\n' +
    '\n' +
    'Хотите сэкономить 10 часов своего времени и получить максимум пользы, тогда проходите к оплате.\n' +
    '\n'+videos.video4_1_pay +
    '\n' +
    'Если Вы хотите узнать подробнее об онлайн-интенсиве, нажмите - "Узнать подробнее"\n' +
    '\n'+videos.video4_1_more +
    '\n' +
    'Если нужна консультация менеджера - Закажите обратный звонок\n' +
    '\nДля заказа обратного звонка напишите - 4',
    video4_2: 'Самые полезные материалы только для Вас по данной рассылке!\n' +
    '\n' +
    'С сегодняшнего дня Вам открыт доступ к дополнительному курсу - "Фонды компании".\n' +
    '\n' +
    '2 видео урока ждут Вас!\n' +
    '\n' +
    'Первое видео "Как отсутствие фондов сказывается на прибыли компании". Из него Вы узнаете:\n' +
    '- почему отсутствие фондовой системы влияет на прибыльность бизнеса;\n' +
    '- как фондовая система помогает оптимизировать структуру расходов;\n' +
    '- как правильное распределение фондов помогает владельцу бизнеса быстро расплачиваться с кредитами и выходить на новый финансовый уровень. \n' +
    '\n' +
    'Нажимайте на ссылку '+videos.video4_2,
    video4_3:'Если вчера Вы не успели изучить первое видео, вы можете посмотреть оба видео сейчас – 1 и 2. На этой уйдет не более 20 минут. \n' +
    '\n' +
    'Второй урок: "Какие бывают фонды и сколько их вообще должно быть в компании". \n' +
    'В нем мы рассмотрим: \n' +
    '- на основании чего создаются фонды компании;\n' +
    '- как внедрить фондовую систему. С каких фондов стоит начать.\n' +
    '- как объединять имеющиеся расходы в фонды.\n' +
    '\n' +
    'Жмите скорее на ссылку '+videos.video4_3,
    video4_4:'Ура! Вы просмотрели 2 видео урока из трех и что бы Вы могли составить полную картину решения задачи "Управление финансами", то предлагаем пройти интенсивный курс.\n' +
    '\n' +
    'Сэкономьте 100+ часов своего времени и внедрите уже проверенное решение.\n' +
    '\n' +
    'Если Вы хотите узнать подробнее об онлайн-интенсиве, нажмите - "Узнать подробнее"\n' +
    '\n' +
    'Узнать подробнее - '+videos.video4_4+'\nДля заказа обратного звонка напишите - 4',
    video4_5:'В дополнение к материалам по фондам Вам открыт доступ к новым данным - скрытые расходы компании!\n' +
    '\n' +
    'Видео урок "Как скрытые расходы уничтожают Вашу прибыль" ждет Вас!\n' +
    '\n' +
    'Из него Вы узнаете: \n' +
    '- какие скрытые расходы всегда присутствуют при найме нового сотрудника;\n' +
    '- как экономия "не на том", приводит к еще большим затратам;\n' +
    '- к чему может привести недостаточный контроль расходов компании.\n' +
    '\n' +
    'Не терпится узнать?! Нажимайте "Продолжить обучение"!\nПродолжить обучение - '+videos.video4_5,
    video4_6:'Так много всего сразу! И это только часть.\n' +
    '\n' +
    'Шестичасовой онлайн-интенсив ждет Вас впереди. Еще больше упражнений и расчетов для Вашего бизнеса!  \n' +
    'Будет жарко!\n' +
    '\n' +
    'Онлайн-интенсив  "Финансовое планирование" - это 6 часов выжимки самого полезного и практического материала из двухдневного 16-часового семинара. После его просмотра, у Вас появится видение полной картины управления финансами в компании и пошаговый план действий по внедрению инструментов финансового планирования.\n' +
    '\n' +
    'Хотите сэкономить 10 часов своего времени и получить максимум пользы, тогда проходите по кнопке "Перейти к оплате"\n' +
    '\n' +
    'Если Вы хотите узнать подробнее об онлайн-интенсиве, нажмите - "Узнать подробнее"\n' +
    '\n' +
    '',
    video5:'Тот, кто ищет ответы на вопросы и постоянно обучается - достигает успеха в бизнесе и в жизни!\n' +
    '\n' +
    'Онлайн-интенсив "Финансовое планирование"  доступен для Вас по кнопке "Смотреть интенсив"!\n' +
    '\n' +
    'Успеха Вам и Вашему бизнесу!',
    video5_1:"С самого первого сообщения было завлено, что программа, на которую Вы подписались пошаговая!\n" +
    "\n" +
    "Вы успешно изучили все базовые шаги! И сегодня у Вас за спинной пройден уже ряд видео уроков, мастер-класс \"Гденьги. Как тратить,чтобы зарабатывать\" и онлайн-интенсив \"Финансовое планирование\"! \n" +
    "\n" +
    "И сейчас для вас открывается возможность пройти продвинутый курс - \"Финансовое планирование\"!\n" +
    "\n" +
    "Это наш основной продукт, который уже позволил развить бизнес более 1 млн предпринимателей по всей России! \n" +
    "\n" +
    "Если Вы планируете развивать бизнес, выберете - \"Подробнее о курсе\"\n" +
    "\n" +
    "Либо другой вариант из меню\n\n"+
    'Подробнее о курсе'+videos.video5_about+
    '\n2 - Об авторе и спикере видео-уроков'+
    '\n3 - О компании ATManagement Group' +
    '\n4 - Заказать обратный звонок'

}

