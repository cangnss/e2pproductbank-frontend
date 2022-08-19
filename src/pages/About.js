import React from "react";
import "./About.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import aboutPhoto from "../assets/images/Aboutbanner.jpg";
function About() {
  return (
    <>
      <div style={{ position: "relative",marginTop:"3.6rem" }}>
        <h2
          style={{
            position: "absolute",
            color: "black",
            fontSize: "40px",
            marginLeft: "8rem",
          }}
        >
          HAKKIMIZDA
        </h2>
        <img width="100%" height="200px" src={aboutPhoto} alt="" />
      </div>
      <Grid
        className="about"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={5}
        spacing={6}
      >
        <Grid item direction="column">
          <Grid item mb={50}>
            <Card className="item1">
              <CardActionArea>
                <CardContent>
                  <Typography
                    className="title"
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    Nasıl Çalışırız?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>
                      Müşterilerimizin ihtiyaçlarını analiz edip, en uygun çözüm
                      alternatiflerini oluşturup, karşılıklı olarak memnuniyeti
                      sağladıktan sonra çalışmaya başlarız. Uygun olan çözüm,
                      sisteme entegre edildikten sonra gerekli güncelleme ve
                      bakım desteğiyle, çözümün sürekli gelişen bilişim
                      teknolojilerine uyumunu gerçekleştiririz.
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className="item2">
              <CardActionArea>
                <CardContent>
                  <Typography
                    className="title"
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    Vizyonumuz
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>
                      Global iş ortaklarımız ve deneyimlerimizle, müşterilerin
                      ihtiyacı olan bilişim sektöründe ortaya çıkan tüm
                      ihtiyaçları, memnuniyeti en üst düzeyde tutarak, dürüst,
                      samimi ve titiz yaklaşımımızla gidermek. Yurtdışı ve
                      yurtiçi pazarında hizmetlerimizle yer almak ve dünyanın
                      önde gelen bilişim kuruluşları ile stratejik iş
                      ortaklıkları kurmak.
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid item direction="column">
          <Grid item display="flex" justifyContent="center" alignItems="center">
            <Card className="item3">
              <CardActionArea>
                <CardContent>
                  <Typography
                    className="title"
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    Biz Kimiz?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>
                      ARKSOFT olarak, müşterilerimizin bilişim sektöründeki
                      ihtiyaçlarına en uygun çözüm alternatiflerini
                      geliştirerek, kendilerinin bir sonraki ve en iyi
                      versiyonlarına geçmelerine yardımcı oluruz. Müşteri
                      memnuniyeti en önemli odağımızdır. Yaptığımız işe ve
                      müşterilerimiz üzerindeki etkimize derinden önem
                      veriyoruz. İşlerimiz tamamen garantilidir ve uyguladığımız
                      çözüm en güncel yöntemlerle ele alınır. Sorunları kısa
                      sürede algılar, hızlı çözüm üretir ve aynı sorunun
                      tekrarlanmamasını sağlarız.
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid item direction="column">
          <Grid item mb={50}>
            <Card className="item4">
              <CardActionArea>
                <CardContent>
                  <Typography
                    className="title"
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    Misyonumuz
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>
                      Uzman kadromuz ile yenilikçi, kaliteli, teknoloji
                      gelişimine duyarlı, yüksek verimlilikte hazırlanmış çözüm
                      ve hizmet planları sunarak, bilişim sektörüne nitelikli ve
                      iş bilincine sahip personeller kazandırmak.
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className="item5">
              <CardActionArea>
                <CardContent>
                  <Typography
                    className="title"
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    Değerlerimiz
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>
                      Değerlerimiz, organizasyonumuzun kültürünü şekillendirir
                      ve şirketimizin karakterini tanımlar.
                      <li>Bütünlük, şeffaflık, kapsayıcılık ve çeşitlilik </li>
                      <li>
                        Tüm insanların haklarını desteklemek ve saygı duymak{" "}
                      </li>
                      <li>
                        Dürüstlükle iş yapmak En iyi uygulamalara ve
                        politikalara bağlı kalmak
                      </li>
                      <li> Dijital sorumluluk</li>
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default About;
