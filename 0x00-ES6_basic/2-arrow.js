export default function getNeighborhoodsList() {
    const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    const add = (newNeighborhood) => {
        sanFranciscoNeighborhoods.push(newNeighborhood);
        return sanFranciscoNeighborhoods;
    };

    return {
        neighborhoods: sanFranciscoNeighborhoods,
        add: add
    };
}
