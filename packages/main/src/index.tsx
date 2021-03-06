import { useRef } from 'react'
import { Chart, ChartConfiguration, registerables } from 'chart.js'
import useDeepCompareEffect from 'use-deep-compare-effect'

type BaseProps = ChartConfiguration

const Base = (props: BaseProps): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useDeepCompareEffect(() => {
    const element = canvasRef.current
    if (!element) return

    // Make a copy.
    // ref: https://github.com/reactchartjs/react-chartjs-2/issues/524
    const config = { ...props }
    Chart.register(...registerables)
    const chart = new Chart(element, config)
    return () => chart.destroy()
  }, [props])

  return <canvas ref={canvasRef} />
}

type ChartProps = Omit<ChartConfiguration, 'type'>

export const Bar = (props: ChartProps): JSX.Element => {
  return <Base type="bar" {...props} />
}

export const Bubble = (props: ChartProps): JSX.Element => {
  return <Base type="bubble" {...props} />
}

export const Doughnut = (props: ChartProps): JSX.Element => {
  return <Base type="doughnut" {...props} />
}

export const Line = (props: ChartProps): JSX.Element => {
  return <Base type="line" {...props} />
}

export const Pie = (props: ChartProps): JSX.Element => {
  return <Base type="pie" {...props} />
}

export const PolarArea = (props: ChartProps): JSX.Element => {
  return <Base type="polarArea" {...props} />
}

export const Radar = (props: ChartProps): JSX.Element => {
  return <Base type="radar" {...props} />
}

export const Scatter = (props: ChartProps): JSX.Element => {
  return <Base type="scatter" {...props} />
}

export type { ChartProps as ChartConfig }

export * as ChartJs from 'chart.js'

export * as ChartJsHelpers from 'chart.js/helpers'
