import { getSupabaseServerClient } from '@/lib/supabase';
import { createServerFn } from '@tanstack/react-start';

// 定义文档类型（根据你的实际数据结构调整）
type Document = {
	id: string;
	[key: string]: any;
};

// 创建一个获取所有文档的服务器函数
export const getAllData = createServerFn({
	method: 'GET', // 使用 GET 方法
})
	.validator(() => {
		// 这里不需要验证输入参数，因为我们只是获取所有文档
		return {};
	})
	.handler(async () => {
		const supabase = getSupabaseServerClient();
		const { data, error } = await supabase.from('documents').select('*');

		if (error) {
			throw new Error(`获取文档失败: ${error.message}`);
		}

		return data as Document[];
	});
