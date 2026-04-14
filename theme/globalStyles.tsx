import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { typography } from "../theme/typography";

export const globalStyles = StyleSheet.create({
  // --- LAYOUT ---
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  spaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // --- CARD & SURFACE ---
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    // Đổ bóng cho iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    // Đổ bóng cho Android
    elevation: 3,
  },

  // --- BUTTONS (NÚT BẤM) ---
  buttonPrimary: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1.5,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextInverse: {
    ...typography.button,
    color: colors.textInverse,
  },
  buttonTextPrimary: {
    ...typography.button,
    color: colors.primary,
  },

  // --- INPUTS (Ô NHẬP LIỆU) ---
  inputField: {
    backgroundColor: colors.surfaceVariant,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.border,
  },

  // --- TEXT SHORTCUTS (PHÍM TẮT CHO CHỮ) ---
  h1: { ...typography.h1, color: colors.textPrimary },
  h2: { ...typography.h2, color: colors.textPrimary },
  h3: { ...typography.h3, color: colors.textPrimary },
  body: { ...typography.bodyMedium, color: colors.textPrimary },
  bodySecondary: { ...typography.bodyMedium, color: colors.textSecondary },
  caption: { ...typography.caption, color: colors.textTertiary },
  errorText: { ...typography.caption, color: colors.error, marginTop: 4 },

  // --- UTILITIES ---
  divider: {
    height: 1,
    backgroundColor: colors.border,
    width: "100%",
    marginVertical: 12,
  },
  mb8: { marginBottom: 8 },
  mb16: { marginBottom: 16 },
  mt16: { marginTop: 16 },
  p16: { padding: 16 },
});
