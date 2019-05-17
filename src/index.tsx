import * as React from 'react'
import * as blessed from 'blessed'
import { render } from 'react-blessed'
import { Bar } from 'react-blessed-contrib'

const { Component } = React


// Rendering a simple centered box with a bar chart
class App extends Component<any, any> {
    
    public constructor(props: any) {
        super(props)

        this.state = {
            barData: [5, 10]
        }
    }

    componentDidMount() {
        const intervalId = setInterval(this.timer.bind(this), 1000)
        
    }

    timer() {
        this.setState({
            barData: this.state.barData.map((bd: number) => bd + 2)
        })

        screen.render()
    }

    render() {
        return (
            <box top="center"
                left="center"
                width="80%"
                height="80%"
                border={{ type: 'line' }}
                style={{ border: { fg: 'blue' } }}>
                <Bar
                    label="Server Utilization (%)"
                    barWidth={4}
                    barSpacing={6}
                    xOffset={0}
                    maxHeight={9}
                    data={{
                        titles: ['bar1', 'bar2'],
                        data: this.state.barData
                    }}
                />
            </box>
        );
    }
}

// Creating our screen
const screen = blessed.screen({
    autoPadding: true,
    smartCSR: true,
    title: 'react-blessed-contrib demo'
});

// Adding a way to quit the program
screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

// Rendering the React app using our screen
const component = render(<App />, screen);

screen.render()
