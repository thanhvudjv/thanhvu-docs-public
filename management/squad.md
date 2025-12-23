
---

# TÀI LIỆU KICK-OFF: CẢI TIẾN QUY TRÌNH LÀM VIỆC THEO MÔ HÌNH SQUAD (NHÓM NHỎ)

### Slide 1: Trang bìa
*   **Tiêu đề lớn:** Cải tiến quy trình & Tối ưu hóa nguồn lực Team Dev9 & Dev10
*   **Tiêu đề phụ:** Chuyển đổi sang mô hình Squad
*   **Người trình bày:** [Tên]
*   **Thời gian:** [Ngày/Tháng/Năm]

---

### Slide 2: Tại sao chúng ta cần thay đổi? (Hiện trạng)
**Nội dung trên slide:**
*   **Quy mô team:** ~20 thành viên hoạt động như 1 team lớn.
*   **Vấn đề gặp phải:**
    *   Daily Meeting quá dài, nhiều thông tin không liên quan đến từng cá nhân.
    *   Khó theo sát tiến độ chi tiết của từng ticket.
    *   Member bị phân tán sự tập trung, chưa rõ mục tiêu cụ thể trong Sprint.

**🗣 Lời dẫn (Speaker Notes):**
*"Hiện tại team chúng ta đang ngày càng lớn mạnh. Tuy nhiên, việc 20 người cùng họp daily và cùng làm việc như một khối đang bộc lộ sự cồng kềnh. Các bạn thường phải nghe những vấn đề không liên quan đến mình, và bản thân PM cũng khó hỗ trợ sâu sát cho từng người. Do đó, chúng ta cần thay đổi để làm việc thông minh hơn, nhẹ nhàng hơn nhưng hiệu quả cao hơn."*

---

### Slide 3: Giải pháp: Chia nhỏ để trị (Mô hình Squad)
**Nội dung trên slide:**
*   **Nguyên tắc:** Chia team lớn thành các **Squad (Nhóm nhỏ)** từ 3-5 thành viên, hoạt động như một Cross-functional Team.
*   **Cấu trúc 1 Squad:** Bao gồm đầy đủ Dev (BE/FE) và Tester để có thể độc lập giải quyết trọn vẹn 1 nhóm ticket (Feature).
*   **Mục tiêu:**
    *   Focus: "Squad của tôi chỉ lo nhiệm vụ của Squad tôi".
    *   Autonomy: Squad được trao quyền tự quyết định cách làm để đạt được mục tiêu.
    *   Linh hoạt: Thành viên có thể luân chuyển giữa các Squad qua mỗi Sprint để điều phối nguồn lực.
    *   Tối ưu hiệu suất: Squad tự quản lý công việc hàng ngày và chịu trách nhiệm cho kết quả cuối cùng.

*   **Cấu trúc mới:** Chia team lớn thành các **Squads** (3-5 thành viên/squad).
*   **Đặc điểm (Cross-functional Team):**
    *   Mỗi Squad có đủ BE, FE, Tester để hoạt động độc lập.
    *   **End-to-End Responsibility:** Squad chịu trách nhiệm trọn gói từ Code -> Test -> Deploy cho tính năng được giao.
*   **Lợi ích:**
    *   **Autonomy:** Squad tự quyết định cách làm để đạt mục tiêu.
    *   **Focus:** "Squad tôi chỉ tập trung vào Goal của Squad tôi".


**🗣 Lời dẫn:**
*"Chúng ta sẽ không làm việc theo kiểu 'giao đâu làm đó' nữa. Thay vào đó, PM sẽ gom các ticket liên quan nhau thành 1 gói, và giao cho một nhóm nhỏ (Squad) khoảng 3-5 người. Nhóm này sẽ 'thầu' trọn gói từ lúc code đến lúc test xong tính năng đó."*

---

### Slide 4: Quy trình vận hành mới (Workflow)
**Nội dung trên slide:** (Nên vẽ sơ đồ khối đơn giản)
1.  **Input:** Comtor/BA tiếp nhận Ticket -> Dịch & Clear Spec.
2.  **Chuẩn bị:** Dev Lead/Test Lead estimate sơ bộ -> PM chia nhóm Ticket.
3.  **Phân bổ:** Thành lập các Squad (Pick member BE, FE, Te vào từng nhóm).
4.  **Thực thi (Sprint):** Các Squad tự chạy -> Cập nhật và báo cáo kết quả hàng ngày.

**🗣 Lời dẫn:**
*"Quy trình sẽ bắt đầu từ BA/Comtor. Sau khi có spec rõ ràng và estimate sơ bộ, chúng ta sẽ chia team. Ví dụ: Squad A làm tính năng Payment, Squad B làm tính năng User Profile. Mình sẽ chọn người phù hợp nhất vào từng nhóm này."*

---

### Slide 5: Daily Meeting - Thay đổi quan trọng nhất
**Nội dung trên slide:**
*   **Cũ:** 20 người họp chung
*   **Mới (2 Vòng):**
    *   **Nguyên tắc:** Họp ngắn, gọn, đúng trọng tâm.
    *   **Vòng 1 (Squad Daily):** Nội bộ Squad (3-5 người) tự họp nhanh trong 5-10 phút. Thảo luận chi tiết kỹ thuật, đồng bộ công việc trong ngày, cập nhật trạng thái Task.
    *   **Vòng 2 (Scrum of Scrums):** Chỉ gồm PM, Leads, Comtor/BA và **Đại diện các Squad**. Báo cáo tiến độ tóm tắt và các vấn đề cần hỗ trợ (Blockers).

**🗣 Lời dẫn:**
*"Chúng ta sẽ tách Daily Meeting ra. Các Squad tự họp nhanh trong 5-10 phút (Daily Scrum). Sau đó, chỉ cần cử 1 đại diện đi họp Scrum of Scrums với PM để báo cáo xem có gặp Blocker gì cần PM gỡ hay không. Điều này giúp tiết kiệm thời gian cho 80% nhân sự còn lại."*

---

### Slide 6: Vai trò & Trách nhiệm (Ai làm gì?)
**Nội dung trên slide:**
*   **Squad Member (FE, BE, Te):**
    *   Là "ngôi sao" chính của Sprint.
    *   Tự cam kết Definition of Done và deadline của nhóm, tự tổ chức Daily Meeting nội bộ.
    *   Chủ động giao tiếp với BA/Comtor trong nhóm (không chờ PM nhắc).
*   **2 PMs chuyên biệt
    * **PM (Delivery Minset - SM):** Chịu trách nhiệm về Tiến độ & Con người. Giải quyết các vấn đề chậm deadline, thiếu resource, blocker.
    * **PM (Product Mindset - PO):** Chịu trách nhiệm về Spec & Logic. Đầu mối chốt yêu cầu, giải đáp thắc mắc nghiệp vụ (cùng BA/Comtor).
*   **Dev Lead / Test Lead:**
    *   Chuyển từ "trực tiếp làm" sang "Hỗ trợ & Review & Gỡ rối".
    *   Giải quyết các ca khó, đảm bảo chất lượng chung (Code review, Test strategy).
    *   Có thể tham gia làm member chính của 1 Squad nếu thiếu người.

**🗣 Lời dẫn:**
*"PM và Lead sẽ chuyển dịch sang vai trò hỗ trợ (Servant Leadership). Chúng tôi ở đây để gỡ khó khăn (Impediments) cho các bạn chạy, chứ không phải để giao việc chi tiết từng giờ (Micro-management)."*

---

### Slide 7: Mốc thời gian & Quy tắc (Timeline)
**Nội dung trên slide:**
*   **Sprint 4 tuần:**
    *   **Tuần 1-2:** Coding + **Test cuốn chiếu (Jackfruit)**. (Yêu cầu: Code xong cái nào Test ngay cái đó).
    *   **Tuần 3:** Merge code -> Test Develop (Integration Test).
    *   **Tuần 4:** Test Staging (Chốt Release).
*   **Quy tắc "Một vai chính":** Mỗi member sẽ thuộc về 1 Squad chính. Nếu hỗ trợ Squad khác, phải ưu tiên Squad chính trước.

**🗣 Lời dẫn:**
*"Mục tiêu là đến tuần 3 chúng ta đã có sản phẩm chạy ổn định trên Develop. Để làm được điều này, Tester và Dev trong Squad phải làm việc chặt chẽ, Dev code xong & bàn giao là Tester test ngay, đừng để dồn đến cuối."*

---

### Slide 8: Kế hoạch triển khai (Next Steps)
**Nội dung trên slide:**
1.  **Hôm nay:** Hiểu về tư duy và cách làm mới.
2.  **Đầu Sprint tới:** PM sẽ công bố danh sách các Squad và nhóm Ticket.
3.  **Thử nghiệm:** Chạy thử nghiệm trong 1 tháng (1 Sprint).
4.  **Review:** Họp Retrospective cuối tháng để đánh giá hiệu quả và điều chỉnh.

*   **Thông điệp cuối:** "Hướng tới xây dựng team Tự quản - Hiệu suất cao - Giảm áp lực quản lý."

---

### Slide 9: Q&A (Hỏi đáp)
*   Dành thời gian cho member đặt câu hỏi.

---

### 💡 Mẹo nhỏ cho bạn khi trình bày (Tips for PM):

1.  **Nhấn mạnh lợi ích cá nhân:** Hãy nói nhiều về việc member sẽ *bớt phải họp*, *được chủ động hơn*, *được học hỏi nhiều hơn khi làm việc nhóm nhỏ*. Đừng chỉ nói về lợi ích quản lý của PM.
2.  **Giải tỏa lo lắng về FE:** Chắc chắn mọi người sẽ hỏi "Chỉ có 1 FE thì làm sao?". Hãy khẳng định PM và Lead sẽ chịu trách nhiệm sắp xếp lịch cho FE, không để FE bị "giằng xé".
3.  **Khuyến khích tinh thần Lead:** Nói rõ là bất kỳ ai trong Squad cũng có thể làm đại diện đi họp với PM. Đây là cơ hội để các bạn Dev/Tester bình thường rèn luyện kỹ năng Leadership.