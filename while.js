// Циклы while() и do while()

        let i = 1;
        while (i < 3) {
            // console.log('Hello while');
            i++;
            break;
        }

        let  ready = confirm('Согласин ли');
        while (ready === false) {
            alert('Вам нужно принять условия');
            ready = confirm('Согласин ли');
        }

    //Тот-же код но короче.
        while (!confirm('Согласин ли')) {
            alert('Вам нужно принять условия');
        }

        let pass = prompt('Введите пароль');
        while (pass !== 'пароль') {
            alert('Не угада, давай ещё');
            pass = prompt('Введите пароль');
        }

        let passi;
        let counter = 0;
        do {
            if (counter > 1) {
                if (confirm('Хотите выйти')) {
                    break;
                }
            }
            passi = prompt('Введите пароль');
            counter++;
        } while (passi !== 'пароль');