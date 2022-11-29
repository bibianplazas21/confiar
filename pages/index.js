import Cacluladora from "../components/Cacluladora";
import Header from "../components/home/Header";
import Tarjetas from "../components/home/Tarjetas";
import Layout from "../components/Layout";


export default function Home() {
  return (
   <Layout>
    <Header/>
    <Cacluladora/>
     <Tarjetas/> 
   </Layout>
  )
}
