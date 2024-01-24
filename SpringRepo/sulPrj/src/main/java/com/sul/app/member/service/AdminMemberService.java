package com.sul.app.member.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.common.PageVo;
import com.sul.app.member.dao.AdminMemberDao;
import com.sul.app.member.vo.MemberVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminMemberService {

	private final AdminMemberDao dao;
	private final SqlSessionTemplate sqlSessionTemplate;
	
	// 회원 목록 조회 (한 페이지 리스트)
	public List<MemberVo> list(PageVo vo) {
		return dao.list(sqlSessionTemplate, vo);
	}
	
	// 회원 목록 조회 (전체 리스트)
	public List<MemberVo> listAll(PageVo vo) {
		return dao.listAll(sqlSessionTemplate, vo);
	}
	
	// 회원 목록 상세 조회
	public MemberVo detail(MemberVo vo) {
		return dao.detail(sqlSessionTemplate, vo);
	}
	
	// 회원 삭제
	public int delete(MemberVo vo) {
		return dao.delete(sqlSessionTemplate, vo);
	}
	

}