import { Button, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import React from "react";
import "./About.css";

function About(props) {
  var items = [
    {
      name: "Biz Kimiz",
      description: "ARKSOFT olarak, müşterilerimizin bilişim sektöründeki ihtiyaçlarına en uygun çözüm alternatiflerini geliştirerek, kendilerinin bir sonraki ve en iyi versiyonlarına geçmelerine yardımcı oluruz. Müşteri memnuniyeti en önemli odağımızdır. Yaptığımız işe ve müşterilerimiz üzerindeki etkimize derinden önem veriyoruz. İşlerimiz tamamen garantilidir ve uyguladığımız çözüm en güncel yöntemlerle ele alınır. Sorunları kısa sürede algılar, hızlı çözüm üretir ve aynı sorunun tekrarlanmamasını sağlarız.",
    },
    {
      name: "Nasıl Çalışırız",
      description: "Müşterilerimizin ihtiyaçlarını analiz edip, en uygun çözüm alternatiflerini oluşturup, karşılıklı olarak memnuniyeti sağladıktan sonra çalışmaya başlarız. Uygun olan çözüm, sisteme entegre edildikten sonra gerekli güncelleme ve bakım desteğiyle, çözümün sürekli gelişen bilişim teknolojilerine uyumunu gerçekleştiririz.",
    },
    {
        name: "Vizyonumuz",
        description: "Global iş ortaklarımız ve deneyimlerimizle, müşterilerin ihtiyacı olan bilişim sektöründe ortaya çıkan tüm ihtiyaçları, memnuniyeti en üst düzeyde tutarak, dürüst, samimi ve titiz yaklaşımımızla gidermek. Yurtdışı ve yurtiçi pazarında hizmetlerimizle yer almak ve dünyanın önde gelen bilişim kuruluşları ile stratejik iş ortaklıkları kurmak.",
      },
      {
        name: "Misyonumuz",
        description: "Uzman kadromuz ile yenilikçi, kaliteli, teknoloji gelişimine duyarlı, yüksek verimlilikte hazırlanmış çözüm ve hizmet planları sunarak, bilişim sektörüne nitelikli ve iş bilincine sahip personeller kazandırmak.",
      },
      {
        name: "Değerlerimiz",
        description: "Değerlerimiz, organizasyonumuzun kültürünü şekillendirir ve şirketimizin karakterini tanımlar."
        
      },
  ];
  return (
    <div className="about">
      <Carousel >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <div className="items">
        <Paper elevation={8} sx={{ height:"100%"}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    </div>
  );
}

export default About;