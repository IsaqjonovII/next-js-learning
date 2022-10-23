import axios from "axios";

const CoinList = ({ coinData }) => {

    console.log(coinData.coins);

    return (
        <div>
            {
                coinData.coins.map(({ name, rank, icon, price }) => (
                    <div key={name}> 
                        <img src={icon} />
                    <h1 >{name}  {rank}</h1>
                    {price}
                    </div>
                ))
            }
        </div>
    )
} 

export const getServerSideProps = async () => {
    const data = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0");

    return {
        props: {
            coinData: data.data
        }
    }
}

export default CoinList