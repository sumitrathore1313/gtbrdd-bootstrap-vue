<template>
  <div id="gbc-opportunity-card">
    <b-card
      :title="opportunity.title"
      :img-src="apiHost + '/files/' + opportunity.image1"
      :img-alt="opportunity.title"
      img-top
      tag="article"
      class="mb-2 opportunity-card"
    >
      <div class="opportunity-top">
        <span class="green-box p-2 is-uppercase">{{ opportunityCategory.name }}</span>
        <span class="green-box p-2 is-uppercase">{{ opportunity.location }}</span>
      </div>
      <b-card-text>
        <div class="deadline is-center">
          <div>Application Date</div>
          <div>{{ opportunity.dateDeadline }}</div>
        </div>
        <div class="description">{{ opportunity.description }}</div>
      </b-card-text>
      <div slot="footer">
        <div class="row">
          <div class="col-5 is-size-4">Getboarded @</div>
          <div class="col-7">
            <b-button :href="constants.url + '/opportunities/details/' + opportunity.id" class="is-size-4 org-btn" variant="secondary">
              <img :src="constants.apiHost + '/files/' + organization.organizationLogo" :alt="organization.organizationName">
              <span>{{ organization.organizationName }}</span>
            </b-button>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import C from '../../constants'
export default {
  name: 'OpportunityCard',
  components: {},
  props: {
    opportunity: {
      type: Object,
      default: function() {
        return {
          title: 'Luman Lupsum',
          image1: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png',
          location: 'XXX',
          dateDeadline: 'XX-XX-XXXX'
        }
      }
    },
    opportunityCategory: {
      type: Object,
      default: function() {
        return {
          name: 'Opportunity'
        }
      }
    },
    organization: {
      type: Object,
      default: function() {
        return {
          organizationName: 'Luman Lupsum',
          organizationLogo:
            'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png'
        }
      }
    },
    constants: {
      type: String,
      default: function() {
        return C
      }
    }
  },
  data() {
    return {
      temp: null
    }
  }
}
</script>
