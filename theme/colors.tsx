export const colors = {
  // --- BRAND COLORS (MÀU THƯƠNG HIỆU) ---
  primary: "#009688", // Teal chủ đạo (Material Teal 500)
  primaryLight: "#4DB6AC", // Teal nhạt (Dùng cho hover, highlight)
  primaryDark: "#00796B", // Teal đậm (Dùng cho header, active state)

  secondary: "#FF9800", // Màu nhấn (Orange/Amber) - tạo độ tương phản mạnh với Teal
  secondaryLight: "#FFB74D",
  secondaryDark: "#F57C00",

  // --- BACKGROUNDS (NỀN) ---
  background: "#F8FAFC", // Nền chính của App (Xám nhạt ngả xanh cho hợp với Teal)
  surface: "#FFFFFF", // Nền của các thành phần nổi (Card, Modal, Bottom Sheet)
  surfaceVariant: "#F1F5F9", // Nền cho các khối xám (Input background, Item list)

  // --- FOREGROUNDS (CHỮ & ICON) ---
  // Best practice: Không dùng màu đen tuyền (#000000) cho chữ để tránh mỏi mắt
  textPrimary: "#0F172A", // Chữ chính (Đọc nhiều, tiêu đề)
  textSecondary: "#64748B", // Chữ phụ (Mô tả, thời gian, placeholder)
  textTertiary: "#94A3B8", // Chữ ít quan trọng
  textDisabled: "#CBD5E1", // Chữ khi bị vô hiệu hóa (Disabled)
  textInverse: "#FFFFFF", // Chữ hiển thị trên nền đậm (VD: Chữ trên nút Primary)
  iconPrimary: "#475569", // Màu Icon mặc định
  iconInverse: "#FFFFFF", // Màu Icon trên nền đậm

  // --- STATUS & FEEDBACK (TRẠNG THÁI) ---
  success: "#10B981", // Xanh lá (Hoàn thành, thành công)
  error: "#EF4444", // Đỏ (Lỗi, xóa, cảnh báo nguy hiểm)
  warning: "#F59E0B", // Vàng cam (Cảnh báo cần chú ý)
  info: "#3B82F6", // Xanh dương (Thông tin chung)

  // --- BORDERS & DIVIDERS (VIỀN & ĐƯỜNG PHÂN CÁCH) ---
  border: "#E2E8F0", // Viền nhạt (Divider, viền card)
  borderFocused: "#94A3B8", // Viền khi input được focus

  // --- OVERLAYS ---
  overlay: "rgba(15, 23, 42, 0.6)", // Nền mờ đằng sau Modal / Dialog
  transparent: "transparent",
};
