<template>
  <div id="gbc-opportunity-card">
    <b-card
      :img-src="constants.apiHost + '/files/' + opportunity.image1"
      :img-alt="opportunity.title"
      img-top
      tag="article"
      class="mb-2 opportunity-card"
    >
      <div slot="header">
        <h2>{{ opportunity.title }}</h2>
      </div>
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
          <h2 class="col-12 col-sm-6" style="padding: 10px 10px">Getboarded @</h2>
          <div class="col-12 col-sm-6">
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
          image1: '284',
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
          organizationLogo: '284'
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
