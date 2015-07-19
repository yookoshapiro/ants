function AntFactory(id)
{
    'use strict';

    var params = {

        /**
         * ID dieser Ameise.
         *
         * @var     int
         */
        id: id,


        /**
         * HTMl-Node einer Ameise.
         *
         * @var     node
         */
        node: null

    };

    function genColor() {
        return Math.random() * 255;
    }

    return Object.create(Object.prototype, {

        getId: {
            /**
             * Gibt die ID dieser Ameise wieder.
             *
             * @return  int
             */
            value: function () {
                return params.id;
            }
        },


        draw: {
            /**
             * Zeichnet eine Ameise.
             *
             * @return  void
             */
            value: function()
            {
                params.node = $('<div class="ant">');

                params.node.css({
                    'background-color': 'rgb(' + genColor() + ', ' + genColor() + ', ' + genColor() + ')',
                    'top': parseInt($('#hill').height()) * Math.random(),
                    'left': parseInt($('#hill').width()) * Math.random()
                });

                $('#hill').append(params.node);
            }
        },


        setPos: {
            /**
             * Setzt die Position einer Ameise.
             *
             * @param   int     x
             * @param   int     y
             * @return  void
             */
            value: function (x, y)
            {
                params.node.animate({
                    top: x,
                    left: y
                });
            }
        },


        move: {
            /**
             * Bewegt die Ameise zufällig.
             *
             * @return  void
             */
            value: function ()
            {
                var x = Math.random() * (Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
                var y = Math.random() * (Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);

                var left = parseInt(params.node.css('left'));
                var top = parseInt(params.node.css('top'));

                var newTop = top + x;
                var newLeft = left + y;

                newTop = Math.max(0, newTop);
                newTop = Math.min(newTop, parseInt($('#hill').height()));

                newLeft = Math.max(0, newLeft);
                newLeft = Math.min(newLeft, parseInt($('#hill').width()));

                this.setPos(newTop, newLeft);
            }
        },


        live: {
            /**
             * Erweckt die Ameise zu Leben.
             *
             * @return  void
             */
            value: function ()
            {
                var _ref = this;

                setTimeout(function interval () {
                    _ref.move();

                    setTimeout(interval, Math.random() * 1000);
                }, 1000);
            }
        }

    });
}