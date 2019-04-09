class IconsRepository {
  constructor() {
    this.FooterIcons = [
      {
        filled: 'https://img.icons8.com/material/50/000000/home.png',
        empty: 'https://img.icons8.com/ios/50/000000/home.png',
        text: 'Home'
      },
      {
        filled: 'https://img.icons8.com/material/50/000000/folder-invoices-filled.png',
        empty: 'https://img.icons8.com/material-outlined/50/000000/folder-invoices.png',
        text: 'Billing'
      },
      {
        filled: 'https://img.icons8.com/ios/80/000000/delivery-filled.png',
        empty: 'https://img.icons8.com/ios/80/000000/delivery.png',
        text: 'Delivery'
      },
      {
        filled:
          'https://img.icons8.com/ios/50/000000/data-configuration-filled.png',
        empty: 'https://img.icons8.com/ios/50/000000/data-configuration.png',
        text: 'Support'
      },
      {
        filled:
          'https://img.icons8.com/ios/80/000000/add-user-group-man-man-filled.png',
        empty:
          'https://img.icons8.com/ios/80/000000/add-user-group-man-man.png',
        text: 'Friend'
      }
    ];
    this.HeaderIcons = {
      chat: 'https://img.icons8.com/ios/50/000000/speech-bubble-with-dots.png',
      menu: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="30" height="30"
      viewBox="0 0 192 192"
      style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g id="Layer_1"><g><rect x="1.5" y="18.5" transform="scale(4.8,4.8)" width="37" height="3" fill="#ffffff"></rect><g fill="#1d3565"><path d="M182.4,91.2v9.6h-172.8v-9.6h172.8M187.2,86.4h-182.4v19.2h182.4v-19.2z"></path></g></g><g><rect x="1.5" y="8.5" transform="scale(4.8,4.8)" width="37" height="3" fill="#ffffff"></rect><g fill="#1d3565"><path d="M182.4,43.2v9.6h-172.8v-9.6h172.8M187.2,38.4h-182.4v19.2h182.4v-19.2z"></path></g></g><g><rect x="1.5" y="28.5" transform="scale(4.8,4.8)" width="37" height="3" fill="#ffffff"></rect><g fill="#1d3565"><path d="M182.4,139.2v9.6h-172.8v-9.6h172.8M187.2,134.4h-182.4v19.2h182.4v-19.2z"></path></g></g></g></g></svg>`
    };
    this.General ={
      delivered: 'https://img.icons8.com/ios/50/000000/shipped.png'
    }
  }
}

export default IconsRepository;

