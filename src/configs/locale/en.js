import key from './key'
import ComponentConst from '../component'

export default {
  // translations namespace, can add more namespace  below this namespace
  [key.translations]: {
    [key.confirm]: 'Confirm',
    [key.cancel]: 'Cancel',
    [key.search]: 'Search',
    [key.error404]: '404',
    [key.titleError404]: 'Sorry Page Not Found !',
    [key.goHome]: 'Go Home',
    [key.ok]: 'Ok',
    [key.nameIsRequired]: 'Name Is Required',
    [key.invalidPhone]: 'Invalid Phone Number',
    [key.invalidEmail]: 'Invalid Email',
    [key.emailIsRequired]: 'Email Is Required',
    [key.phoneIsRequired]: 'Phone Number Is Required',
    [key.passwordIsRequired]: 'Password Is Required',
    [key.passwordMinLength]: `Name length must be greater than ${ComponentConst.common.validation.passwordMinLength} characters`,
    [key.next]: 'Next',
    [key.prev]: 'Prev',
    [key.delete]: 'Delete',
    [key.update]: 'Update',
    [key.create]: 'Create',
    [key.businessIsRequired]: 'Business Is Required',
    [key.allFieldsRequired]: 'Please fill all of fields',
  },
  // menu namespace
  [key.menu]: {
    [key.users]: 'Users',
    [key.menuMergeBusinesses]: 'Merge Businesses',
    [key.accountBusinesses]: 'Account Businesses',
    [key.menuBusinesses]: 'Businesses',
    [key.menuInboxFlags]: 'Inbox Flags',
    [key.menuInboxes]: 'Inboxes',
    [key.menuVouchers]: 'Vouchers',
    [key.menuVoucherCategories]: 'Voucher categories',
    [key.menuVoucherGroups]: 'Voucher Groups',
    [key.menuVoucherBanners]: 'Voucher Banners',
  },
  // businesses namespace
  [key.businesses]: {
    [key.placeholderSearch]: 'Search businesses',
    // Table
    [key.titleCover]: 'Avatar',
    [key.titleBusinessName]: 'Business',
    [key.titleAddress]: 'Address',
    [key.titleCategories]: 'Categories',
    [key.titleAvatar]: 'Avatar',
    [key.titlePhone]: 'Phone number',
    [key.titleCity]: 'City',
    [key.titlePassword]: 'Password',
    // Active, verify, city
    [key.status]: 'Status',
    [key.all]: 'All',
    [key.active]: 'Active',
    [key.inactive]: 'InActive',
    [key.verification]: 'Verification',
    [key.verified]: 'Verified',
    [key.notVerified]: 'Not Verified',
    [key.cities]: 'Cities',
    [key.nameOrAddress]: 'Name | Address',
    [key.timesRating]: 'reviews',
    [key.messby]: 'by ',
  },

  // Users namespace
  [key.users]: {
    [key.users]: 'Users',
    [key.placeholderSearchUser]: 'Name | Email | Phone',
    [key.titleNameUser]: 'Name',
    [key.textSetLocalExpert]: 'Set this user to local expert?',
    [key.textUnsetLocalExpert]: 'Unset local expert this user?',
    [key.type]: 'Type',
  },
}
