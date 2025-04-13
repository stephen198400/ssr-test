#!/bin/bash

# 设置组件安装目录
COMPONENTS_DIR="src/components/ui"

# 确保目标目录存在
mkdir -p "$COMPONENTS_DIR"

# 检查 components.json 是否存在
if [ ! -f "components.json" ]; then
  echo "错误: components.json 不存在，请先运行 'pnpm dlx shadcn-ui@latest init'"
  exit 1
fi

# 定义所有组件
components=(
  "accordion" "alert" "alert-dialog" "aspect-ratio" "avatar" 
  "badge" "button" "calendar" "card" "carousel" "checkbox" 
  "collapsible" "command" "context-menu" "dialog" "drawer" 
  "dropdown-menu" "form" "hover-card" "input" "label" "menubar" 
  "navigation-menu" "popover" "progress" "radio-group" "scroll-area" 
  "select" "separator" "sheet" "skeleton" "slider" "switch" "table" 
  "tabs" "textarea" "sonner" "toggle" "tooltip"
)

# 将组件数组转换为空格分隔的字符串
components_string="${components[*]}"

echo "开始安装 shadcn/ui 组件到 $COMPONENTS_DIR..."
echo "即将安装以下组件："
echo "$components_string"

# 一次性安装所有组件
echo "正在安装所有组件..."
if pnpm dlx shadcn@latest add $components_string -y; then
  echo "✓ 组件安装命令执行成功"
else
  echo "✗ 组件安装过程中出现错误"
  exit 1
fi

# 检查安装结果
echo "检查安装结果..."
installed_count=$(ls -l "$COMPONENTS_DIR" | grep "^d" | wc -l)
echo "实际安装的组件数量: $installed_count"

if [ $installed_count -eq 0 ]; then
  echo "警告: 没有找到已安装的组件！"
  echo "请尝试手动安装单个组件来测试:"
  echo "pnpm dlx shadcn-ui@latest add button -y"
fi

echo "所有 shadcn/ui 组件安装完成！"
