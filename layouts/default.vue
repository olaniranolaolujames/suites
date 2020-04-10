
<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
  export default {
    mounted: function() {
      if (!process.server) {
        const script12 = document.createElement('script')       
        script12.type = 'text/javascript'
        script12.src = 'js/jquery-2.1.4.min.js'

        const script11 = document.createElement('script')       
        script11.type = 'text/javascript'
        script11.src = 'js/hoverIntent.js'

        const script10 = document.createElement('script')       
        script10.type = 'text/javascript'
        script10.src = 'js/superfish.js'

        const script9 = document.createElement('script')       
        script9.type = 'text/javascript'
        script9.src = 'js/bootstrap.min.js'

        const script8 = document.createElement('script')       
        script8.type = 'text/javascript'
        script8.src = 'js/jquery.waypoints.min.js'

        const script7 = document.createElement('script')       
        script7.type = 'text/javascript'
        script7.src = 'js/jquery.countTo.js'

        const script6 = document.createElement('script')       
        script6.type = 'text/javascript'
        script6.src = 'js/jquery.stellar.min.js'

        const script5 = document.createElement('script')       
        script5.type = 'text/javascript'
        script5.src = 'js/bootstrap-datepicker.min.js'

        const script4 = document.createElement('script')       
        script4.type = 'text/javascript'
        script4.src = 'js/classie.js'
        
        const script2 = document.createElement('script')       
        script2.type = 'text/javascript'
        script2.src = 'js/selectFx.js' 
        
        const script1 = document.createElement('script')       
        script1.type = 'text/javascript'
        script1.src = 'js/jquery.flexslider-min.js'        
        
        const script3 = document.createElement('script')       
        script3.type = 'text/javascript'
        script3.src = 'js/custom.js'
        document.head.appendChild(script1)
        document.head.appendChild(script11)
        document.head.appendChild(script10)
        document.head.appendChild(script9)
        document.head.appendChild(script8)
        document.head.appendChild(script6)
        document.head.appendChild(script5)
        document.head.appendChild(script4)       
        document.head.appendChild(script2)
        document.head.appendChild(script1)
        document.head.appendChild(script3)
      }
    }
  }
</script>