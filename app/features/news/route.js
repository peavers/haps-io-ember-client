import Route from '@ember/routing/route';
import RSVP from "rsvp";
import InfinityRoute from "ember-infinity/mixins/route";
import {get} from "@ember/object";

export default Route.extend(InfinityRoute, {

  model() {
    return RSVP.hash({

      classifications: get(this, 'store').findAll('classification'),

      newsItems: this.infinityModel("newsItem", {
        perPage: 25,
        startingPage: 0,
        modelPath: 'controller.newsItems',
      })
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

});
