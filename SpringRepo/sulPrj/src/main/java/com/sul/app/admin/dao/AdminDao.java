package com.sul.app.admin.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.admin.vo.AdminVo;

@Repository
public class AdminDao {
	
	// 회원가입
	public int join(SqlSessionTemplate sqlSessionTemplate, AdminVo vo) {
		return sqlSessionTemplate.insert("AdminMapper.join", vo);
	}
	
	// 로그인
	public AdminVo login(SqlSessionTemplate sqlSessionTemplate, AdminVo vo) {
		return sqlSessionTemplate.selectOne("AdminMapper.login", vo);
	}

}
