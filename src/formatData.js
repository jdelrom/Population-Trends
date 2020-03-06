const totalPopulation = {};
const statesPopulation = {};

d3.csv("./csv/us-race-population.csv")
    .row((d) => {
        return {
            id: d.ID,
            state: d.NAME,
            race: +d.RACE,
            yr2000: d.POPESTIMATE2000,
            yr2001: d.POPESTIMATE2001,
            yr2002: d.POPESTIMATE2002,
            yr2003: d.POPESTIMATE2003,
            yr2004: d.POPESTIMATE2004,
            yr2005: d.POPESTIMATE2005,
            yr2006: d.POPESTIMATE2006,
            yr2007: d.POPESTIMATE2007,
            yr2008: d.POPESTIMATE2008,
            yr2009: d.POPESTIMATE2009,
            yr2010: d.POPESTIMATE2010
        }
    })

    .get((data) => {
        // console.log(data);
        // debugger
        // window.data = data;
        // let states = [];
        

        data.forEach(d => {
            if (d.state === 'United States') {
                totalPopulation[d.race] = {
                    yr2000: d.yr2000,
                    yr2001: d.yr2001,
                    yr2002: d.yr2002,
                    yr2003: d.yr2003,
                    yr2004: d.yr2004,
                    yr2005: d.yr2005,
                    yr2006: d.yr2006,
                    yr2007: d.yr2007,
                    yr2008: d.yr2008,
                    yr2009: d.yr2009,
                    yr2010: d.yr2010
                }
            } else {
                let id = d.id;
                let race = d.race;
                let state = d.state;

                // if (!statesPopulation[state]) {
                //     statesPopulation[state] = {};
                // } 
                if (!statesPopulation[id]) {
                    statesPopulation[id] = {};
                }  // else if (!statesPopulation[id][state]) {
                //     statesPopulation[id] = {};
                // }
                
                // if (!!statesPopulation[id][state][race]) {
                //     statesPopulation[id][state][race] = {};
                // }
                // if (!statesPopulation[state][race]) {
                //     statesPopulation[state][races] = {};
                // }

                statesPopulation[id] = {
                        name: state,
                        yr2000: d.yr2000,
                        yr2001: d.yr2001,
                        yr2002: d.yr2002,
                        yr2003: d.yr2003,
                        yr2004: d.yr2004,
                        yr2005: d.yr2005,
                        yr2006: d.yr2006,
                        yr2007: d.yr2007,
                        yr2008: d.yr2008,
                        yr2009: d.yr2009,
                        yr2010: d.yr2010
                }
            }
        })
    });

window.totalPopulation = totalPopulation;
window.statesPopulation = statesPopulation;

const _totalPopulation = totalPopulation;
export { _totalPopulation as totalPopulation };
const _statesPopulation = statesPopulation;
export { _statesPopulation as statesPopulation };