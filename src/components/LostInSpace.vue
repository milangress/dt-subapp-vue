<template lang="pug">
    svg(width="100vw", height="100vh", @mouseup="addParticle")
      g#force-field(v-if="showForceField")
        template(v-for="(cell, i) in forceField")
          rect(:x="(i % forceFieldDimensions.columns) * forceFieldDimensions.width",
            :y="Math.floor(i / forceFieldDimensions.columns) * forceFieldDimensions.height",
            :width="forceFieldDimensions.width", :height="forceFieldDimensions.height",
            :fill="radiansToColor(cell)")
          polygon(points="10,0 -10,-10 0,0 -10,10",
            :transform="`translate(${forceFieldDimensions.width / 2 + (i % forceFieldDimensions.columns) * forceFieldDimensions.width},${forceFieldDimensions.height / 2 + Math.floor(i / forceFieldDimensions.columns) * forceFieldDimensions.height}) rotate(${(cell / (Math.PI * 2)) * 360}) scale(${forceFieldDimensions.width / 70.0})`")
      g#shapes(v-if="showShapes")
        template(v-for="shape in shapes")
          polygon(
            :points="shape.points.map(p=>{return `${p.x},${p.y} `})"
            :fill="shape.fill || 'black'", stroke="black", stroke-width="2")
          <!--ellipse(:cx="shape.center.x", :cy="shape.center.y", :rx="5", :ry="5",-->
            <!--fill="yellow", stroke="blue", stroke-width="3")-->
      g#particles
        template(v-for="particle in particles")
          ellipse(:cx="particle.position.x", :cy="particle.position.y", rx="5", ry="5")
</template>

<script>
  export default {
    name: 'LostInSpace',
    data () {
      return {
        showForceField: true,
        showShapes: true,
        frameLength: 1000 / 30.0,
        lastFrameTime: -1,
        shapes: [],
        particles: [],
        forceFieldDimensions: {
          columns: -1,
          rows: -1,
          width: -1,
          height: -1
        },
        forceField: []
      }
    },
    mounted () {
      const that = this

      // random shapes
      // Array(10).fill(0).map(() => {
      //   this.makeShape()
      // })

      let points = []
      let padding = 150

      Array(100).fill(0).map((v, i) => {
        let ii = i / 100.0
        points.push({
          x: padding + ii * (window.innerWidth - 2 * padding),
          y: window.innerHeight - padding - ii * (window.innerHeight - 2 * padding)
        })
      })
      this.shapes.push({
        points: points
      })

      points = []
      Array(100).fill(0).map((v, i) => {
        let ii = i / 100.0
        points.push({
          x: padding + ii * (window.innerWidth - 2 * padding),
          y: padding + ii * (window.innerHeight - 2 * padding)
        })
      })
      this.shapes.push({
        points: points
      })

      let forceFieldCellSize = 10
      this.forceFieldDimensions.columns = Math.ceil(window.innerWidth / forceFieldCellSize)
      this.forceFieldDimensions.width = window.innerWidth / this.forceFieldDimensions.columns
      this.forceFieldDimensions.rows = Math.ceil(window.innerHeight / forceFieldCellSize)
      this.forceFieldDimensions.height = window.innerHeight / this.forceFieldDimensions.rows
      let forceFieldLength = this.forceFieldDimensions.columns * this.forceFieldDimensions.rows

      // // random FF
      // this.forceField = Array(forceFieldLength).fill(0).map(() => {
      //   return Math.random() * Math.PI * 2
      // })

      // circular FF
      // this.forceField = Array(forceFieldLength).fill(0).map((v, i) => {
      //   let x = i % this.forceFieldDimensions.columns
      //   let y = Math.round(i / this.forceFieldDimensions.columns)
      //   let xDist = this.forceFieldDimensions.columns / 2 - x
      //   let yDist = this.forceFieldDimensions.rows / 2 - y
      //   return Math.atan2(yDist, xDist) + Math.PI / 2
      // })

      // FF based on shapes
      this.forceField = Array(forceFieldLength).fill(0).map((v, i) => {
        let x = i % that.forceFieldDimensions.columns
        let y = Math.round(i / that.forceFieldDimensions.columns)
        let xDist = 0
        let yDist = 0

        that.shapes.map(shape => {
          shape.points.map(point => {
            let sx = Math.round(point.x / that.forceFieldDimensions.width)
            let sy = Math.round(point.y / that.forceFieldDimensions.height)
            let xd = sx - x
            let yd = sy - y
            let dist = Math.sqrt(xd * xd + yd * yd)
            let factor = 1
            if (dist > 0) factor = 1 / (dist * dist * dist)
            xDist += xd * factor
            yDist += yd * factor
          })
        })

        return Math.atan2(yDist, xDist)
      })

      this.particles = Array(100).fill(0).map(() => {
        return that.makeParticle()
      })
    },
    computed: {
      svgSize () {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        }
      },
      nextFrame () {
        return (this.$store.state.time - this.lastFrameTime) >= this.frameLength
      }
    },
    watch: {
      nextFrame () {
        this.lastFrameTime = this.$store.state.time
        this.updateParticles()
      }
    },
    methods: {
      updateParticles () {
        let that = this
        if (this.particles) {
          this.particles = this.particles.map(particle => {
            let rad = this.getForceFieldValue(particle.position.x, particle.position.y)

            let forceX = Math.cos(rad) * 0.2
            let forceY = Math.sin(rad) * 0.2

            particle.direction.x += forceX
            particle.direction.y += forceY

            let len = Math.sqrt(particle.direction.x * particle.direction.x + particle.direction.y * particle.direction.y)
            if (len !== 0 && len !== 1) {
              particle.direction.x /= len
              particle.direction.y /= len
            }

            particle.position.x += particle.direction.x * particle.velocity
            particle.position.y += particle.direction.y * particle.velocity

            if (particle.position.x >= that.svgSize.width) particle.position.x = 1
            if (particle.position.x <= 0) particle.position.x = that.svgSize.width - 1
            if (particle.position.y >= that.svgSize.height) particle.position.y = 1
            if (particle.position.y <= 0) particle.position.y = that.svgSize.height - 1

            return particle
          })
        }
      },
      addParticle (event) {
        this.particles.push(this.makeParticle(event.clientX, event.clientY))
      },
      radiansToColor (rad) {
        let angle = (rad / (Math.PI * 2)) * 360
        return `hsl(${angle} 100% 50%)`
      },
      getForceFieldValue (x, y) {
        let fx = Math.floor(x / this.forceFieldDimensions.width)
        let fy = Math.floor(y / this.forceFieldDimensions.height)
        return this.forceField[fx + fy * this.forceFieldDimensions.columns]
      },
      makeParticle (x, y) {
        let rad = Math.random() * Math.PI * 2
        return {
          position: {
            x: x || (Math.random() * window.innerWidth),
            y: y || (Math.random() * window.innerHeight)
          },
          direction: {
            x: Math.cos(rad),
            y: Math.sin(rad)
          },
          velocity: 1 + Math.random() * 1
        }
      },
      handleKeyDown (event) {
        console.log(event)
      },
      makeShape () {
        let size = 50 + Math.random() * window.innerWidth / 2
        let x = Math.random() * window.innerWidth
        let y = Math.random() * window.innerHeight
        let shape = {
          center: {x: x, y: y},
          points: []
        }
        Array(3 + Math.ceil(Math.random() * 5)).fill(0).map(() => {
          let rad = Math.random() * Math.PI * 2
          shape.points.push({
            x: x + Math.cos(rad) * Math.random() * size,
            y: y + Math.sin(rad) * Math.random() * size
          })
        })
        this.shapes.push(shape)
      }
    }
  }
</script>

<style scoped lang="stylus">
</style>
