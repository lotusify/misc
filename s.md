graph TD
    A[Bắt đầu] --> B{Chọn sinh viên và nhấn nút "Xóa"};
    B --> C{Sinh viên có ràng buộc dữ liệu?};
    C -- Không --> D[Hiển thị hộp thoại xác nhận];
    C -- Có --> E[Thông báo lỗi: Không thể xóa do có dữ liệu liên quan];
    D --> F{Người dùng có xác nhận xóa?};
    F -- Có --> G[Xóa sinh viên khỏi CSDL];
    G --> H[Thông báo xóa thành công];
    F -- Không --> I[Hủy thao tác];
    H --> J[Kết thúc];
    I --> J;
    E --> J;
