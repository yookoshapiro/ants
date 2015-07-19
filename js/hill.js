function HillFactory()
{
    'use strict';

    var params = {

        /**
         * Übersicht aller Ameisen.
         *
         * @var     object
         */
        ants: {},


        /**
         * Der Zähler verhindert doppelte IDs.
         *
         * @var     int
         */
        counter: 0

    };

    return Object.create(Object.prototype, {

        newAnt: {
            /**
             * Erzeugt eine neue Ameise.
             *
             * @return  object
             */
            value: function ()
            {
                params.counter++;

                var ant = params.ants[ params.counter ] = AntFactory( params.counter );

                ant.draw();

                return ant;
            }
        },


        countAnts: {
            /**
             * Gibt die Anzahl der Ameisen wieder.
             *
             * @return  int
             */
            value: function () {
                return params.counter;
            }
        }

    });
}