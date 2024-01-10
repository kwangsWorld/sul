package com.sul.app.member.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.member.dao.MemberDao;
import com.sul.app.member.vo.MemberVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberService {

	private final MemberDao dao;
	private final SqlSessionTemplate sst;
	
	//회원가입
	public int join(MemberVo vo) throws Exception {
		
		String id = vo.getId();
		if(id.length() < 5) {
			throw new Exception("아이디 5글자 이상");
		}
		if("admin".equalsIgnoreCase(id)) {
			throw new Exception("사용 불가한 아이디 입니다.");
		}
		return dao.join(sst, vo);
	}

	//로그인
	public MemberVo login(MemberVo vo) {
		return dao.login(sst, vo);
	}

	//회원 정보 수정
	public int edit(MemberVo vo) {
		return dao.edit(sst, vo);
	}

	//회원 탈퇴
	public int quit(MemberVo vo) {
		return dao.quit(sst, vo);
	}

	// 회원 목록 조회
	public List<MemberVo> list() {
		return dao.list(sst);
	}
	
	// 회원 목록 상세 조회
	public MemberVo detail(String no) {
		return dao.detail(sst, no);
	}
	
	// 회원 삭제
	public int delete(String no) {
		return dao.delete(sst, no);
	}
	

}