import React from 'react';

function Lightbox({ name, toggle, show }) {
  return (
    <div className='lightbox'>
      <div className='lightbox-img'>
        <div className='times hide-sm'>
          <i onClick={() => toggle(!show)} className='fas fa-times'></i>
        </div>
        <div
          className={`${
            name.includes('mobile') ? 'times-y-mobile show-sm' : 'times-y show-sm'
          }`}
        >
          <i onClick={() => toggle(!show)} className='fas fa-times'></i>
        </div>
        {name === 'showcase' && <img src={require('../img/showcase.jpg')} />}
        {name === 'screen-carshop-admin' && (
          <img src={require('../img/carshop-admin.gif')} />
        )}
        {name === 'screen-carshop-media' && (
          <img src={require('../img/carshop-media.gif')} />
        )}
        {name === 'screen-carshop-mobile-sm' && (
          <img
            className='img-mobile-sm'
            src={require('../img/carshop-mobile.gif')}
          />
        )}
        {name === 'screen-carshop-layout' && (
          <img src={require('../img/carshoplayout.gif')} />
        )}
        {name === 'screen-carshop' && (
          <img src={require('../img/carshop1.gif')} />
        )}
        {name === 'screen-easy-create-order' && (
          <img src={require('../img/easy-create-order.gif')} />
        )}
        {name === 'screen-easy-fav' && (
          <img src={require('../img/easy-fav.gif')} />
        )}
        {name === 'screen-easy-main' && (
          <img src={require('../img/easy-main.gif')} />
        )}
        {name === 'screen-easy-mobile-sm' && (
          <img
            className='img-mobile-sm'
            src={require('../img/easy-mobile.gif')}
          />
        )}
        {name === 'screen' && <img src={require('../img/listool.gif')} />}
        {name === 'screen-listool-mobile-add' && (
          <img src={require('../img/listtool-add.gif')} />
        )}
        {name === 'screen-listool-mobile-add-sm' && (
          <img
            className='img-mobile-vertical-thin'
            src={require('../img/listtool-add.gif')}
          />
        )}
        {name === 'screen-listool-mobile-custom' && (
          <img src={require('../img/listtool-custom.gif')} />
        )}
        {name === 'screen-listool-mobile-custom-sm' && (
          <img
            className='img-mobile-vertical-thin'
            src={require('../img/listtool-custom.gif')}
          />
        )}
        {name === 'screen-listool-mobile-separate' && (
          <img src={require('../img/listtool-separate.gif')} />
        )}
        {name === 'screen-carshop-admin-sm' && (
          <img
            className='img-mobile-vertical'
            src={require('../img/carshop-admin.gif')}
          />
        )}
        {name === 'screen-carshop-media-sm' && (
          <img
            className='img-mobile-vertical'
            src={require('../img/carshop-media.gif')}
          />
        )}
        {name === 'screen-carshop-layout-sm' && (
          <img
            className='img-mobile-vertical'
            src={require('../img/carshoplayout.gif')}
          />
        )}
        {name === 'screen-carshop-sm' && (
          <img
            className='img-mobile-vertical'
            src={require('../img/carshop1.gif')}
          />
        )}
        {name === 'screen-easy-create-order-sm' && (
          <img
            className='img-mobile-vertical'
            src={require('../img/easy-create-order.gif')}
          />
        )}
        {name === 'screen-easy-fav-sm' && (
          <img
            className='img-mobile-vertical'
            src={require('../img/easy-fav.gif')}
          />
        )}
        {name === 'screen-easy-main-sm' && (
          <img
            className='img-mobile-vertical'
            src={require('../img/easy-main.gif')}
          />
        )}
        {name === 'screen-mobile-sm' && (
          <img
            className='img-mobile-vertical-thin'
            src={require('../img/listool.gif')}
          />
        )}
        {name === 'screen-listool-mobile-separate-sm' && (
          <img
            className='img-mobile-vertical-thin'
            src={require('../img/listtool-separate.gif')}
          />
        )}
      </div>
      <div className='lightbox-img'>
        {name === 'screen-easy-mobile' && (
          <img className='img-mobile' src={require('../img/easy-mobile.gif')} />
        )}
        {name === 'screen-carshop-mobile' && (
          <img
            className='img-mobile'
            src={require('../img/carshop-mobile.gif')}
          />
        )}
      </div>
    </div>
  );
}

export default Lightbox;
