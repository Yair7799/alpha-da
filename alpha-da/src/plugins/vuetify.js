import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#658cc5',
            secondary: '#101a3e',
            info: '#c4c4c4',
            accent: '#070d27',
          },
        },
      },
});
