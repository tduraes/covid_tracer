import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }
    
    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});
    }

    render () {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <h1>COVID-19 no Mundo</h1>
                <h5>Números em tempo real</h5>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;