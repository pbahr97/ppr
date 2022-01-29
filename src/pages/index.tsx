import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div style={{
        padding: "40px 0 80px",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gridTemplateRows: "280px 280px 280px 280px",
        gridGap: "1rem"
      }}>
        <div className="box box-2w"></div>
        <div className="box"></div>
        <div className="box box-2h"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box box-2h"></div>
        <div className="box box-2w"></div>
        <div className="box"></div>
        <div className="box box-2w"></div>
        <div className="box box-2w"></div>
      </div>
    </Layout>
  )
}
