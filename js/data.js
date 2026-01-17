/**
 * CONFIGURATION DATA
 * Update this file to change website content without touching HTML/CSS
 */

const CONFIG = {
    info: {
        name: "Rosa Villa Tam Dao Golf & Resort",
        phone: "0904337336",
        zaloLink: "https://zalo.me/0904337336",
        email: "rosavillatamdao@gmail.com",
        address: "Lô E51, Sân Golf Tam Đảo, Hợp Châu, Tam Đảo, Vĩnh Phúc",
        mapLink: "https://maps.app.goo.gl/nKWdsP2UX5SizmNf7?g_st=iz",
        facebook: "https://www.facebook.com/profile.php?id=100075603859498"
    },
    hero: {
        title: "Rosa Villa Tam Dao – Chốn sum vầy, đong đầy niềm vui",
        subtitle: "Bể bơi • Karaoke • BBQ • View sân golf • Không gian đồi thông",
        bgImage: "assets/images/6.jpg", // Will map to scraped image 1
        badges: [
            "5 phòng ngủ",
            "12-25 khách",
            "View sân golf",
            "Bể bơi riêng"
        ]
    },
    video: {
        title: "Video Giới Thiệu",
        description: "Toàn cảnh không gian nghỉ dưỡng tại Rosa Villa Tam Đảo",
        //youtubeId: "dQw4w9WgXcQ", // ID video YouTube (Ví dụ: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> dQw4w9WgXcQ)
        // Hoặc dùng file MP4:
        videoUrl: "assets/videos/11.mp4",
        thumb: "assets/images/40.jpg"
    },
    images: [
        { src: "assets/images/4.jpg", alt: "Ảnh 4" },
        { src: "assets/images/5.jpg", alt: "Ảnh 5" },
        { src: "assets/images/6.jpg", alt: "Ảnh 6" },
        { src: "assets/images/7.jpg", alt: "Ảnh 7" },
        { src: "assets/images/8.jpg", alt: "Ảnh 8" },
        { src: "assets/images/9.jpg", alt: "Ảnh 9" },
        { src: "assets/images/10.jpg", alt: "Ảnh 10" },
        { src: "assets/images/11.jpg", alt: "Ảnh 11" },
        { src: "assets/images/12.jpg", alt: "Ảnh 12" },
        { src: "assets/images/13.jpg", alt: "Ảnh 13" },
        { src: "assets/images/14.jpg", alt: "Ảnh 14" },
        { src: "assets/images/16.jpg", alt: "Ảnh 16" },
        { src: "assets/images/21.jpg", alt: "Ảnh 21" },
        { src: "assets/images/22.jpg", alt: "Ảnh 22" },
        { src: "assets/images/23.jpg", alt: "Ảnh 23" },
        { src: "assets/images/24.jpg", alt: "Ảnh 24" },
        { src: "assets/images/25.jpg", alt: "Ảnh 25" },

        // Video:
        {
            type: "video",
            src: "assets/videos/3.mp4",
            poster: "",
            alt: "Video Tiệc Pool Party"
        },
        // Video thêm 1:
        {
            type: "video",
            src: "assets/videos/4.mp4",
            poster: "",
            alt: "Video Villa"
        },
    ],
    amenities: [
        { icon: "swimming-pool", title: "Bể bơi riêng", desc: "View sân golf cực chill" },
        { icon: "mic", title: "Karaoke", desc: "Loa xịn, hát thả ga" },
        { icon: "utensils", title: "Khu vực BBQ", desc: "Sân nướng rộng rãi" },
        { icon: "users", title: "Sức chứa lớn", desc: "Tối đa 25 người" },
        { icon: "wifi", title: "Wifi tốc độ cao", desc: "Phủ sóng toàn villa" }
    ],
    food: {
        // Ảnh thực đơn (Menu)
        menuImage: "assets/images/1.jpg",
        // Danh sách ảnh món ăn (Không cần mô tả)
        items: [
            "assets/images/15.jpg",
            "assets/images/17.jpg",
            "assets/images/42.jpg",
            "assets/images/43.jpg",
            "assets/images/44.jpg",
        ]
    },
    faqs: [
        {
            q: "Rosa Villa E51 có gì đặc biệt so với các villa khác ở Tam Đảo?",
            a: "Rosa Villa E51 nằm trọn trong quần thể sân Golf Tam Đảo, sở hữu không gian xanh, riêng tư và sang trọng. Villa có bể bơi riêng, view sân golf, đồi thông, vườn đào, rất phù hợp cho những kỳ nghỉ muốn 'đổi gió' nhưng vẫn đủ tiện nghi và đẳng cấp."
        },
        {
            q: "Villa phù hợp cho bao nhiêu người ở?",
            a: "Villa tiêu chuẩn cho 16 người lớn hoặc 12 người lớn + 6 trẻ em dưới 12 tuổi. Từ người thứ 17 phụ thu 200.000đ/người, tối đa không quá 25 khách, rất lý tưởng cho gia đình nhiều thế hệ, họp lớp hay nhóm bạn thân."
        },
        {
            q: "Rosa Villa có bể bơi và khu vui chơi riêng không?",
            a: "Có. Villa có bể bơi riêng biệt, sân vườn rộng, không gian ngoài trời thoáng đãng để vui chơi, vận động, tổ chức tiệc BBQ hay các hoạt động gắn kết nhóm."
        },
        {
            q: "Villa có phù hợp để tổ chức tiệc, sinh nhật, họp nhóm không?",
            a: "Rất phù hợp. Không gian phòng khách mở, sân vườn lớn cùng khu BBQ ngoài trời giúp Rosa Villa trở thành lựa chọn lý tưởng cho sinh nhật, họp lớp, liên hoan, team building, chụp ảnh kỷ yếu."
        },
        {
            q: "Villa có đầy đủ bếp và tiện nghi nấu ăn không?",
            a: "Có. Rosa Villa trang bị phòng bếp lớn, đầy đủ đồ dùng như bếp lẩu, bếp nướng, nồi cơm điện, lò vi sóng, tủ lạnh, xoong nồi, bát đĩa… Khách chỉ cần chuẩn bị nguyên liệu và tận hưởng bữa ăn ấm cúng cùng người thân."
        },
        {
            q: "Rosa Villa có karaoke và các tiện ích giải trí không?",
            a: "Có. Villa trang bị loa mic karaoke di động, cùng các tiện ích giải trí giúp buổi tối thêm vui và gắn kết – tất cả đều được sử dụng miễn phí."
        },
        {
            q: "Khi lưu trú tại Rosa Villa, khách được miễn phí những dịch vụ gì?",
            a: "Khách lưu trú được miễn phí vé vào cổng sân Golf, sử dụng bể bơi, karaoke, bếp BBQ và toàn bộ tiện nghi sinh hoạt trong villa."
        },
        {
            q: "Villa có hỗ trợ dọn rửa sau bữa ăn không?",
            a: "Có. Villa hỗ trợ dịch vụ dọn rửa sau các bữa ăn theo nhu cầu, chi phí sẽ được tư vấn cụ thể khi khách liên hệ."
        },
        {
            q: "Làm thế nào để đặt Rosa Villa nhanh và chính xác nhất?",
            a: "Để được giữ lịch nhanh, tư vấn đúng nhu cầu và báo giá chi tiết, khách vui lòng nhắn Zalo trực tiếp. Bên mình sẽ hỗ trợ từ số lượng khách, lịch trống đến các dịch vụ đi kèm."
        }
    ],
    nearbyAttractions: [
        {
            icon: "paw",
            title: "Trại Gấu Tam Đảo",
            desc: "Ghé thăm trung tâm cứu hộ gấu, trải nghiệm thiên nhiên hoang dã và ý nghĩa bảo tồn – điểm check-in yêu thích của các gia đình."
        },
        {
            icon: "mountain-sun",
            title: "Đỉnh Tam Đảo",
            desc: "Chỉ vài phút di chuyển để săn hoàng hôn rực rỡ, bình minh 'trên mây' và tận hưởng không khí trong lành ở độ cao 1.200m."
        },
        {
            icon: "place-of-worship",
            title: "Chùa Tây Thiên",
            desc: "Hành hương về vùng đất linh thiêng, chiêm bái ngôi chùa cổ kính giữa núi rừng – thanh tịnh, an yên cho tâm hồn."
        },
        {
            icon: "baseball",
            title: "Sân Pickleball",
            desc: "Gần villa có sân Pickleball hiện đại – môn thể thao đang hot, hội bạn đông đủ là quẩy ngay!"
        }
    ]
};

// Export configuration
// Export configuration prevented for file:// protocol support
// export default CONFIG;
