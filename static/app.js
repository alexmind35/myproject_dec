new Vue({
        el: '#orders_app',
        data: {
            message: 'Привет, Vue!!!!!',
            orders: []
        },
        created: function () {
            const vm = this;
            axios.get('http://127.0.0.1:8000/api/orders/?format=json')
                .then(function (response) {
                    vm.orders = response.data
                    console.log(response.data)
                    console.log('Успешноооооо')

                })
        }
    }
)