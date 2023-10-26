import React, {ReactElement} from 'react';
import cn from 'classnames';

import Item from './Item/Item';

import {ReactComponent as Merchant} from '../../../assets/icons/merchant.svg';
import {ReactComponent as Cards} from '../../../assets/icons/cards.svg';
import SimpleIntegrationImg from '../../../assets/images/simpleIntegration.png';
import ConnectorsImg from '../../../assets/images/connectors.png';
import SimpleIntegrationAdaptiveImg from '../../../assets/images/simpleIntegrationAdaptive.png';
import ConnectorsAdaptiveImg from '../../../assets/images/connectorsAdaptive.png';
import {ReactComponent as Point} from '../../../assets/icons/point.svg';
import {ReactComponent as PointWhite} from '../../../assets/icons/pointWhite.svg';

import styles from './paymentBuild.module.scss';
import ItemAdaptive from './ItemAdaptive/ItemAdaptive';

type Item = {
  item: ReactElement;
  hoverItem: ReactElement;
  title: string;
  isBlack?: boolean;
};

type ItemAdaptive = {
    title: string;
    content: ReactElement;
};

export const PaymentBuild: React.FunctionComponent = () => {
  const cardsList: string[] = [
    'Bank Cards',
    'e-Wallets',
    'Apple Pay, Google Pay, Samsung Pay',
    'Bank Transfers',
    'CRYPTO',
    'Local Alternative Payments Means',
  ];

  const items: Item[] = [
    {
        item: <Merchant className={styles.merchantIcon}/>,
        hoverItem: <div className={styles.merchantsTitle}>Your merchants</div>,
        title: 'Merchants',
    },
    {
        item: <div className={styles.itemText}>
            <h1 className={styles.itemTitle}>40+</h1>
            <h2 className={styles.itemSubtitle}>ready made integration modules for CMS and shopping carts</h2>
        </div>,
        hoverItem: <img alt={'Simple Integration'} className={styles.itemText} src={SimpleIntegrationImg}/>,
        title: 'Simple integration',
    },
    {
        item: <div className={styles.pspBlock}>
            <div className={styles.pspTitle}><Point className={styles.iconPoint}/> YOUR PSP</div>
            <p className={styles.pspSubtitle}>Your brand & domain name</p>
            <p className={styles.pspFooter}>Powered by beGateway</p>
        </div>,
        hoverItem: <div className={styles.pspBlock}>
            <div className={styles.pspTitle}><PointWhite className={styles.iconPoint}/> YOUR PSP</div>
            <p className={styles.pspSubtitle}>Your brand & domain name</p>
            <p className={styles.pspFooter}>Powered by beGateway</p>
        </div>,
        title: 'Payment Service Provider',
        isBlack: true,
    },
    {
        item: <div className={styles.itemText}>
            <h1 className={styles.itemTitle}>170+</h1>
            <h2 className={styles.itemSubtitle}>connectors with Banks and PSPs worldwide</h2>
        </div>,
        hoverItem: <img alt={'Connectors'} className={styles.itemText} src={ConnectorsImg}/>,
        title: 'Connectors',
    },
    {
        item: <Cards className={styles.cardsIcon}/>,
        hoverItem: <ul className={styles.itemList}>
            {cardsList.map((text, index) =>
              <li className={styles.listText} key={index}>{text}</li>)}
        </ul>,
        title: 'Payment methods',
    },
  ];

  const itemsAdaptive: ItemAdaptive[] = [
    {
        title: 'Simple integration',
        content: <div className={styles.itemsCardAdaptive}>
            <div className={styles.cardsText}>
                <h1 className={styles.cardsTitle}>40+</h1>
                <h2 className={cn(styles.cardsSubtitle, styles.integrationSubtitle)}>
                    ready made integration modules for CMS and shopping carts
                </h2>
            </div>
            <img alt='Simple Integration' src={SimpleIntegrationAdaptiveImg}/>
        </div>,
    },
    {
        title: 'Payment Service Provider',
        content: <div className={styles.pspBlockAdaptive}>
            <div className={styles.pspTitle}><Point className={styles.iconPoint}/> YOUR PSP</div>
            <p className={styles.pspSubtitle}>Your brand & domain name</p>
            <p className={styles.pspFooter}>Powered by beGateway</p>
        </div>,
    },
    {
        title: 'Connectors',
        content: <div className={styles.itemsCardAdaptive}>
            <div className={styles.cardsText}>
                <h1 className={styles.cardsTitle}>170+</h1>
                <h2 className={cn(styles.cardsSubtitle, styles.connectorsSubtitle)}>
                    connectors with Banks and PSPs worldwide
                </h2>
            </div>
            <img alt='Connectors' src={ConnectorsAdaptiveImg}/>
        </div>,
    }
  ];

  return (
    <div className={styles.paymentBlock}>
        <h1 className={styles.title}>Build your own payment processing service</h1>
        <h2 className={styles.subtitle}>Powered by a ready-to-use software and an
            <span className={styles.highlight}> expert technical team</span>
        </h2>
        <div className={styles.itemsBlockDesktop}>
            <div className={styles.itemsWrapper}>
                {items.map((element, index) => <Item
                key={index}
                item={element.item}
                hoverItem={element.hoverItem}
                isBlack={'isBlack' in element ? element.isBlack : false}
                title={element.title}/>)}
            </div>
        </div>
        <div className={styles.itemsBlockAdaptive}>
            <h1 className={styles.itemsTitleAdaptive}>
                Merchants
            </h1>
            <div className={styles.blockMerchantAdaptive}>
                <Merchant className={styles.merchantIconAdaptive}/>
                <Merchant className={styles.merchantIconAdaptive}/>
                <Merchant className={styles.merchantIconAdaptive}/>
            </div>
            {itemsAdaptive.map((element, index) => <ItemAdaptive
            title={element.title}
            content={element.content}
            key={index}
            />)}
            <h1 className={styles.itemsTitleAdaptive}>
                Payment methods
            </h1>
            <div className={styles.blockMerchantAdaptive}>
                <Cards className={styles.cardsIconAdaptive}/>
                <Cards className={styles.cardsIconAdaptive}/>
                <Cards className={styles.cardsIconAdaptive}/>
            </div>
            <div className={styles.cardsList}>
                <ul className={styles.listAdaptive}>
                    {cardsList.map((text, index) =>
                        <li className={styles.listTextAdaptive} key={index}>{text}</li>)
                    }
                </ul>
            </div>
        </div>
    </div>
  );
}

export default PaymentBuild;
