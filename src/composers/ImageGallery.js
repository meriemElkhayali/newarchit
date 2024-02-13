import './ImageGallery.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React ,{ useState,useEffect }  from 'react';
export default function TemplateDemo() {
  const [activeIndex, setActiveIndex] = useState(0);

    const images1 = [
      
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/AB1.jpeg?alt=media&token=c379076f-7533-4682-b11d-5c035ebbc435', 
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/immo1.jpg?alt=media&token=2272778a-133b-4755-9c0f-ec2ec40434dd',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/immo7.jpeg?alt=media&token=50e39ecb-4902-401f-ac3e-2d07fa171e44',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/immo8.jpeg?alt=media&token=8d60fc8e-54e0-4b8a-9f40-4750a2b0ed9c',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/immo10.jpeg?alt=media&token=9c3506b2-c4e1-4866-8485-16aa9a4fcef9',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/immo11.jpeg?alt=media&token=504de3a5-4258-4641-af31-120811c1ad93',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/immo12.jpeg?alt=media&token=37970095-9b4e-4395-aaba-bf3ad33ea2bb',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/immo13.jpg?alt=media&token=49375fc0-0d42-4402-9736-378250c42c68',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/immo14.jpeg?alt=media&token=9108acd2-1831-469c-b707-3dc5cf134331',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/immo15.jpeg?alt=media&token=e1010830-805b-458e-a719-f91201c153c5',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/newimmo.jpeg?alt=media&token=e6b23953-f5c9-4edf-9bd2-44fbe92f3af3'
    ];
    const images2 = [
      
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/villa1.jpeg?alt=media&token=13260e2a-6f24-45c2-b004-f0b39e30cab4',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/Villa2.jpg?alt=media&token=31f8770f-2fdc-49fb-96d5-012eeae75a3c',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/villa3.jpeg?alt=media&token=59bf9f9c-2c28-49d7-a481-f9e0744cd016',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/Villa5.jpg?alt=media&token=0c8be836-685c-497e-bf0a-046499bdaaa9',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/villa6.jpg?alt=media&token=a3d575b7-3cf0-42a7-94ea-6f784130a92c',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/villa7.jpg?alt=media&token=a73b9800-ba8a-4f97-8b97-f39c03c52408',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/villa9.jpg?alt=media&token=8e2fcfce-070c-4d67-a703-11e6c260f035',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/villa10.jpg?alt=media&token=c7fadb31-5763-42c1-bb8b-66cab374357c',  
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/villa11.jpeg?alt=media&token=871ee3c0-ab7b-4c9b-84f5-374b18231262',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/villa12.jpeg?alt=media&token=9ac60fe8-37a8-4c86-8e30-74eea457d32b',  
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/newvilla.jpeg?alt=media&token=7566eb80-6c1a-42cc-8083-c03d6065b6d4'
    ];
    const images3 = [
      
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/AB2.jpeg?alt=media&token=dc36b66a-4379-447f-82a3-2d7611eec5ca',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/CD2.jpeg?alt=media&token=422b8eff-c289-414b-8ba2-536880e9d4ec',
      
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/EF2.jpeg?alt=media&token=2a8b9607-05f0-42f8-983d-4d776961a56f',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/GH2.jpeg?alt=media&token=c9e726ea-1724-4b23-9b13-51f6f61eab96',

      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/AB3.jpeg?alt=media&token=b7e896a8-ab73-43e0-adbb-57e4c13411fa',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/EF3.jpeg?alt=media&token=e386c2b1-e634-44f7-a3c7-2841f035c5c2',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/GH3.jpeg?alt=media&token=eea39e45-e7aa-4fcf-b753-88f9c5282a06',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/amminagement1.jpeg?alt=media&token=b0df3cec-944f-4074-af67-14b34ffc9ce5',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/amminagement2.jpg?alt=media&token=06231feb-24d9-462e-b0e4-a966e181c1f4',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/AB4.jpeg?alt=media&token=7def693d-cf65-4680-b6c1-c43ed005534f',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/CD4.jpeg?alt=media&token=3a076b1d-1395-4560-8cee-2e729dc11d43',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/EF4.jpeg?alt=media&token=ca2b5f90-cc8d-4f0e-b053-614620361ba5',  
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/GH4.jpeg?alt=media&token=ffe8993d-961b-43d4-9dee-8da25f181550',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/AB5.jpeg?alt=media&token=f6077a74-248e-4111-b3a0-8cbb3928f771',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/CD5.jpeg?alt=media&token=33454ea8-0178-4cfd-bdd6-2412a16cd912',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/EF5.jpeg?alt=media&token=caaeff73-613f-493e-9594-6c3234b5835c',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/GH5.jpeg?alt=media&token=28efcfc9-80a4-45d3-b75b-dd8f2bc65bfc',  
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/IJ5.jpeg?alt=media&token=bdd7985d-a653-483e-9f21-fc17d7a454d8',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/KL5.jpeg?alt=media&token=1175bcc4-6ba1-4e72-ad45-bf6864642a45',  
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/MN5.jpeg?alt=media&token=fd9ec15d-a33c-4842-b06f-134f4ec3c5da',
      'image/VDO5.mp4'
     

    ];
    const images4 = [
      
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/scool1.jpg?alt=media&token=b3013fe9-c3f1-42e8-b8af-52662bcd11bd',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/scool2.jpg?alt=media&token=6b3d3b8f-fdbc-4f2d-b26f-9bdc34366976',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/scool3.jpg?alt=media&token=953e206e-4837-4161-8726-833950729466',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/scool4.jpeg?alt=media&token=6b985a7c-2505-4a11-894a-213fb387a503',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/scool5.JPG?alt=media&token=0baa47ef-0155-429b-843a-9794fbf015b3',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/scool6.JPG?alt=media&token=9aab0922-8129-41ae-884f-81e8ed102584',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/scool8.jpeg?alt=media&token=9fb91525-5ec9-45fe-935f-f636b68f2e71'


    ];
    const images5= [
      
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/lotti.JPG?alt=media&token=301654b0-b413-4ff0-ae38-5fe75dba4fe1',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/plan%20autorise.jpg?alt=media&token=19fdb165-97fc-4b1e-b271-bcd50fe522be',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/20.999%20(1)-1.jpeg?alt=media&token=8014e186-cbf4-4761-8ed4-7dca1be88a99'
    
     

    ];
    const images6= [
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/association.jpeg?alt=media&token=b34bd98d-fe86-4fd5-986d-42ddec22ded2',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/urban.jpg?alt=media&token=f4b746b9-062f-460b-a6ed-86c9c944417c',
      'https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/scool7.JPG?alt=media&token=315ef36b-75e6-4031-b671-c46ca0203d12',

    ]
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      maxWidth:'90%',
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: activeIndex,
      beforeChange: (current, next) => setActiveIndex(next),    };
  
  return (
    <div id="projets">
    <div className="card margin-bottom flex" > 
      <div className="intro">
        <h1>Nos Projets!</h1>
        <p>Sté Abdo Archi Nord </p>
        <br />
      </div>

      <div className="gridywrap">
        <div className="gridy-2 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/AB1.jpeg?alt=media&token=c379076f-7533-4682-b11d-5c035ebbc435")' }}>&nbsp;</div>

          <div className="gridinfo">
            <h3>PROJETS-IMMEUBLE</h3>
            <div className="gridmeta">
            </div>
            <a href="#" class="grid-btn grid-more" data-toggle="modal" data-target="#myModal">
  <span>More</span> <i class="fa fa-plus"></i>
</a>          </div>

        </div>
      

        <div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered "
            role="document"
            style={{ maxWidth: '95%' }}
  >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">PROJETS-IMMEUBLE</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
  
        <div className="dynamic-carousel" >
            <Slider {...settings} >
          {images1.map((image, index) => (
            <div key={index} style={{display: "flex", justifyContent: "center"}}>
              <img src={image}  style={{ maxHeight:"500px",maxWidth:"100%" , margin: "0 auto"}} alt={`slide ${index + 1}`} className="pic" />
            </div>

          ))}
        </Slider>
        </div>
      {/* </div> */}
    </div>
  </div>
</div>

        <div className="gridy-1 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/Villa2.jpg?alt=media&token=31f8770f-2fdc-49fb-96d5-012eeae75a3c")' }}>&nbsp;</div>
          <div className="gridinfo">
            <h3>PROJETS-VILLA</h3>
            <div className="gridmeta">
              </div>

            <a href="#" class="grid-btn grid-more" data-toggle="modal" data-target="#myModal1">
  <span>More</span> <i class="fa fa-plus"></i>
</a>             </div>
        </div>



        <div class="modal" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-centered"
            role="document"
            style={{ maxWidth: '95%' }}
  >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">PROJETS-VILLA</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    
        <div className="dynamic-carousel" >
            <Slider {...settings} >
          {images2.map((image, index) => (
            <div key={index} style={{display: "flex", justifyContent: "center"}}>
              <img src={image}  style={{ maxHeight:"500px",maxWidth:"100%" , margin: "0 auto"}} alt={`slide ${index + 1}`} className="pic" />
            </div>

          ))}
        </Slider>
        </div>
      {/* </div> */}
    </div>
  </div>
</div>



        <div className="gridy-1 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/AB4.jpeg?alt=media&token=7def693d-cf65-4680-b6c1-c43ed005534f")' }}>&nbsp;</div>

          <div className="gridinfo">
            <h3>PROJETS-AMENAGEMENT INTERIEURE</h3>
            <div className="gridmeta">
              {/* <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p> */}
              {/* <p className="gridwho"><i className="fa fa-user"></i> Clark Kent</p> */}
            </div>
            {/* <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p> */}
            <a href="#" class="grid-btn grid-more" data-toggle="modal" data-target="#myModal3">
  <span>More</span> <i class="fa fa-plus"></i>
</a>              </div>
        </div>

        <div class="modal" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog modal-dialog-centered"
            role="document"
            style={{ maxWidth: '95%' }}
  >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">PROJETS-AMENAGEMENT INTERIEURE</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
        <div className="dynamic-carousel" >
        <Slider {...settings}>
      {images3.map((item, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
          {typeof item === 'string' && item.endsWith('.mp4') ? (
            <video controls style={{ maxHeight: '700px', maxWidth: '100%', margin: '0 auto' }}>
              <source src={item} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={item} style={{ maxHeight: '500px', maxWidth: '100%', margin: '0 auto' }} alt={`slide ${index + 1}`} className="pic" />
          )}
        </div>
      ))}
    </Slider>
        </div>
      {/* </div> */}
    </div>
  </div>
</div>


        <div className="gridy-2 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/scool4.jpeg?alt=media&token=6b985a7c-2505-4a11-894a-213fb387a503")' }}>&nbsp;</div>

          <div className="gridinfo">
            <h3>PROJETS-SCOLAIRE</h3>
            <div className="gridmeta">
            
            </div>
            <a href="#" class="grid-btn grid-more" data-toggle="modal" data-target="#myModal4">
  <span>More</span> <i class="fa fa-plus"></i>
</a>            </div>
        </div>

        
        <div class="modal" id="myModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered "
            role="document"
            style={{ maxWidth: '95%' }}
  >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">PROJETS-SCOLAIRE</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
        <div className="dynamic-carousel" >
            <Slider {...settings} >
          {images4.map((image, index) => (
            <div key={index} style={{display: "flex", justifyContent: "center"}}>
              <img src={image}  style={{ maxHeight:"500px",maxWidth:"100%" , margin: "0 auto"}} alt={`slide ${index + 1}`} className="pic" />
            </div>

          ))}
        </Slider>
        </div>
      {/* </div> */}
    </div>
  </div>
</div>



        <div className="gridy-2 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/lotti.JPG?alt=media&token=301654b0-b413-4ff0-ae38-5fe75dba4fe1)' }}>&nbsp;</div>
          <div className="gridinfo">
            <h3>PROJETS-URBANISME</h3>
            <div className="gridmeta">
           
            </div>
            <a href="#" class="grid-btn grid-more" data-toggle="modal" data-target="#myModal5">
  <span>More</span> <i class="fa fa-plus"></i>
</a>             </div>
        </div>

       
        <div class="modal" id="myModal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered "
            role="document"
            style={{ maxWidth: '95%' }}
  >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">PROJETS-URBANISME</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
        <div className="dynamic-carousel" >
            <Slider {...settings} >
          {images5.map((image, index) => (
            <div key={index} style={{display: "flex", justifyContent: "center"}}>
              <img src={image}  style={{ maxHeight:"500px",maxWidth:"100%" , margin: "0 auto"}} alt={`slide ${index + 1}`} className="pic" />
            </div>

          ))}
        </Slider>
        </div>
      {/* </div> */}
    </div>
  </div>
</div>
<div className="gridy-1 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/imagesarchi-42acd.appspot.com/o/association.jpeg?alt=media&token=b34bd98d-fe86-4fd5-986d-42ddec22ded2")' }}>&nbsp;</div>
          <div className="gridinfo">
            <h3>AUTRES ... </h3>
            <div className="gridmeta">
              </div>

            <a href="#" class="grid-btn grid-more" data-toggle="modal" data-target="#myModal6">
  <span>More</span> <i class="fa fa-plus"></i>
</a>             </div>
        </div>



        <div class="modal" id="myModal6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-centered"
            role="document"
            style={{ maxWidth: '95%' }}
  >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">AUTRES ...</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    
        <div className="dynamic-carousel" >
            <Slider {...settings} >
          {images6.map((image, index) => (
            <div key={index} style={{display: "flex", justifyContent: "center"}}>
              <img src={image}  style={{ maxHeight:"500px",maxWidth:"100%" , margin: "0 auto"}} alt={`slide ${index + 1}`} className="pic" />
            </div>

          ))}
        </Slider>
        </div>
      {/* </div> */}
    </div>
  </div>
</div>



</div>
     




















  


   


      </div>







      
    </div>
  );
}
















