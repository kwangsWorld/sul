package com.sul.app.admin.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.admin.dao.AdminDao;
import com.sul.app.admin.vo.AdminVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminService {
	
	private final AdminDao dao;
	private final SqlSessionTemplate sqlSessionTemplate;
	
	// 회원가입
	public int join (AdminVo vo) throws Exception {
		
		if(vo.getAdminId().length() < 4) {
			throw new Exception("아이디가 너무 짧습니다.");
		}
		if("admin".equalsIgnoreCase(vo.getAdminId())) {
			throw new Exception("사용 불가한 아이디");
		}
		
		return dao.join(sqlSessionTemplate, vo);
	}
	
	// 로그인
	public AdminVo login(AdminVo vo) {
		return dao.login(sqlSessionTemplate, vo);
	}
	
}
