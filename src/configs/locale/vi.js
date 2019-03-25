import key from './key'
import ComponentConst from '../component'

export default {
  // translations namespace, can add more namespace below this namespace
  [key.translations]: {
    [key.confirm]: 'Xác nhận',
    [key.cancel]: 'Hủy',
    [key.search]: 'Tìm kiếm',
    [key.error404]: '404',
    [key.titleError404]: 'Xin lỗi, trang không tìm thấy !',
    [key.goHome]: 'Trở về trang chủ',
    [key.ok]: 'Đồng ý',
    [key.nameIsRequired]: 'Tên không được để trống',
    [key.emailIsRequired]: 'Email không được để trống',
    [key.phoneIsRequired]: 'Số điện thoại không được để trống',
    [key.invalidPhone]: 'Số điện thoại không đúng định dạng',
    [key.invalidEmail]: 'Email không đúng định dạng',
    [key.passwordIsRequired]: 'Mật khẩu không được để trống',
    [key.passwordMinLength]: `Tên phải có ít nhất ${ComponentConst.common.validation.passwordMinLength} ký tự`,
    [key.next]: 'Tiếp',
    [key.prev]: 'Quay lại',
    [key.delete]: 'Xóa',
    [key.update]: 'Cập nhật',
    [key.create]: 'Tạo',
    [key.businessIsRequired]: 'Cửa hàng không được để trống',
    [key.allFieldsRequired]: 'Vui lòng điền đầy đủ thông tin',
    [key.useStatus]: 'Trạng thái sử dụng',
    [key.notYetUsed]: 'Chưa sử dụng',
    [key.used]: 'Đã sử dụng',
  },

  // menu namespace
  [key.menu]: {
    [key.users]: 'Người dùng',
    [key.menuMergeBusinesses]: 'Sát nhập địa điểm',
    [key.accountBusinesses]: 'TK cửa hàng',
    [key.menuBusinesses]: 'Địa điểm',
    [key.menuInboxFlags]: 'Cờ đánh dấu tin nhắn',
    [key.menuInboxes]: 'Tin nhắn',
    [key.menuVouchers]: 'Quà tặng',
    [key.menuVoucherCategories]: 'Danh mục quà tặng',
    [key.menuVoucherGroups]: 'Nhóm quà tặng',
    [key.menuVoucherBanners]: 'Banner ưu đãi',
  },

  // businesses namespace
  [key.businesses]: {
    [key.titleMergeBusinesses]: 'Sát nhập địa điểm',
    [key.placeholderSearch]: 'Tên địa điểm',
    // Table
    [key.titleCover]: 'Ảnh đại diện',
    [key.titleBusinessName]: 'Cửa hàng',
    [key.titleAddress]: 'Địa chỉ',
    [key.titleCategories]: 'Danh mục',
    [key.titleAvatar]: 'Ảnh đại diện',
    [key.titlePhone]: 'SĐT',
    [key.titleCity]: 'Thành phố',
    [key.titlePassword]: 'Mật khẩu',
    // Active, verify, citys
    [key.status]: 'Trạng thái',
    [key.all]: 'Tất cả',
    [key.active]: 'Đang hoạt động',
    [key.inactive]: 'Không hoạt động',
    [key.verification]: 'Xác nhận',
    [key.verified]: 'Đã xác nhận',
    [key.notVerified]: 'Chưa xác nhận',
    [key.cities]: 'Thành phố',

    [key.merge]: 'Sát nhập',
    [key.businessName]: 'Tên địa điểm',
    [key.searchBusiness]: 'Tìm kiếm địa điểm:',
    [key.nameOrAddress]: 'Tên | Địa chỉ',
    [key.mergeBusinessesList]: 'Các địa điểm được sáp nhập',
    [key.timesRating]: 'bài đánh giá',
    [key.mergedBusinesses]: 'Địa điểm đã sát nhập',
    [key.mergedBy]: 'Sát nhập bởi',
    [key.mergedAt]: 'lúc',
    [key.alreadyMerged]: 'đã được sáp nhập vào địa điểm khác',
    [key.infoBusinessIsMerged]: 'Địa điểm đã được sát nhập vào',
    [key.messby]: 'bởi',
    [key.ratingAverage]: 'Điểm trung bình',
    [key.ratingTimes]: 'Lượt đánh giá',
  },

  // Users namespace
  [key.users]: {
    [key.users]: 'Người dùng',
    [key.placeholderSearchUser]: 'Tên | Email | SĐT',
    [key.titleNameUser]: 'Tên',
    [key.textSetLocalExpert]: 'Chuyển người dùng này thành chuyên gia?',
    [key.textUnsetLocalExpert]: 'Chuyển chuyên gia này thành người dùng thường?',
    [key.type]: 'Loại',
  },
}

